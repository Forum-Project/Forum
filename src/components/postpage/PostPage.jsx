import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import axios from 'axios'

// Importing Components
import Post from '../posts/Post'
import Comments from '../comments/Comments'
import CommentInput from '../comment-text/CreateComments'
// import Navbar from '../navbar/Navbar'; 

const postPageStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        maxWidth: 650, //change this to adjust container width
        width: '100%', //makes it responsive
        marginTop: '1.5rem' 
    },
}));

export default function SimpleContainer(props) {
    const [post, setPost] = useState({})
    const [author, setAuthor] = useState({})
    const [comments, setComments] = useState([])
    const classes = postPageStyle()
    const postPagePath = props.location.pathname.substr(10, props.location.pathname.length) //there's probably a better way to grab id from location
    const domain = process.env.REACT_APP_DOMAIN || 'http://localhost:5000'

    //populates post and use(author)
    useEffect(() => {
        //populates from location state first
        if (props.location.state) {
            setPost(props.location.state.post)
            setAuthor(props.location.state.author)
        } else { //otherwise, take the pathname id and fetch the required data
            axios.get(`${domain}/posts/${postPagePath}`)
            .then(postData => {
                //populates post with data from BE before grabbing user data
                setPost(postData.data)
                axios.get(`${domain}/users/${postData.data.user_id}`)
                .then(userData => setAuthor(userData.data))
                .catch(err => console.log('Catch for user was invoked:', err))
            })
            .catch(err => console.log('Catch for post was invoked:', err))
        }
    }, [])

    //populates comments
    useEffect(() => {
        if (props.location.state) {
            axios.get(`${domain}/posts/${props.location.state.post._id}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.log('Catch to grab comments was invoked:', err))
        } else {
            axios.get(`${domain}/posts/${postPagePath}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.log('Catch to grab comments was invoked:', err))
        }
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.container}>
                <Post post={post} user={author} />
                <CommentInput postId={post._id} setComments={setComments} />
                <Comments comments={comments} setComments={setComments}/>
            </Container>
        </React.Fragment>
    );
}

