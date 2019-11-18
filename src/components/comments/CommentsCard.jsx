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
import axios from 'axios'

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
}));

export default function RecipeReviewCard(props) {
    const { comment } = props
    const [user, setUser] = useState({})
    const [expanded, setExpanded] = React.useState(false);
    const domain = process.env.DOMAIN || 'localhost:5000'
    const classes = useStyles();

    useEffect(() => {
        axios.get(`http://${domain}/users/${comment.user_id}`)
        .then(userData => setUser(userData.data))
        .catch(err => console.log('Catch for user was invoked:', err))
    }, [])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                subheader={comment.comments_timestamp}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {comment.comments_body}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}