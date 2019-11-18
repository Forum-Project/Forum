import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Importing Components
import Post from '../posts/Post'
import Comments from '../comments/Comments'
import CommentInput from '../comment-text/CreateComments'

const postPageStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: 600, //change this to adjust container width
        width: '100%', //makes it responsive
        marginTop: '1.5rem' 
    },
}));

export default function SimpleContainer(props) {
    const [post, setPost] = useState({})
    const [author, setAuthor] = useState({})
    const classes = postPageStyle()
    const postPagePath = props.location.pathname.substr(10, props.location.pathname.length) //there's probably a better way to grab id from location

    useEffect(() => {
        if (props.location.state) {
            setPost(props.location.state.post)
            setAuthor(props.location.state.author)
        }
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.container}>
                <Post post={post} user={author} postPagePath={postPagePath}/>
                <CommentInput />
                <Comments />
            </Container>
        </React.Fragment>
    );
}

