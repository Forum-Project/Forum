import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import CreateComment from '../comment-text/CreateComments'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 1000,
        width: '100%',
        margin: '0 auto 1rem',
        justifyContent: 'center'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    textField: {
      input1: {
        height: 600
      },
      maxWidth: 1000,
      width: '100%',
    },
}));

export default function CommentsCard(props) {
    const { comment, setComments } = props
    const [user, setUser] = useState({})
    const [loggedInUserId, setLoggedInUserId] = useState()
    const [expanded, setExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false)
    const domain = process.env.REACT_APP_DOMAIN || 'http://localhost:5000'
    const classes = useStyles();

    //populate user with author of comment
    useEffect(() => {
        axios.get(`${domain}/users/${comment.user_id}`)
        .then(userData => setUser(userData.data))
        .catch(err => console.log('Catch for user was invoked:', err))
    }, [])

    //grab id of logged in user
    useEffect(() => {
        if (localStorage.getItem('token')) { //get the current logged in user's id
            const decoded = jwtDecode(localStorage.getItem('token'))
            setLoggedInUserId(decoded.subject)
        }
    }, [])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const deleteComment = () => {
        axios.delete(`${domain}/comments/${comment._id}`)
        .then(deletedComment => {
            axios.get(`${domain}/posts/${comment.post_id}/comments`)
            .then(updatedComments => setComments(updatedComments.data))
            .catch(err => console.log('Catch to update post comments was invoked:', err))
        })
        .catch(err => console.log('Catch to delete comment was invoked:', err))
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {user.username ? user.username.substr(0, 1).toUpperCase() : ''}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={user.username}
                subheader={new Date(comment.comments_timestamp).toDateString()}
            />
            <CardContent>
                {!isEditing ? (
                    <Typography variant="body2" color="textSecondary" component="p">
                        {comment.comments_body}
                    </Typography>
                ) : (
                    <CreateComment editComment={comment} setIsEditing={setIsEditing} setComments={setComments}/>
                )}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                {comment.user_id === loggedInUserId ? (
                    <>
                        <Button onClick={() => setIsEditing(!isEditing)}>
                            Edit
                        </Button>
                        <Button onClick={() => deleteComment()}>
                            Delete
                        </Button>
                    </>
                ) : ''}
            </CardActions>
        </Card>
    );
}