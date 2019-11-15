import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Importing Components
import Posts from '../posts/Post'
import Comments from '../comments/Comments'
import CommentInput from '../comment-text/CreateComments'
import Navbar from '../Navbar/Navbar'; 

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

export default function SimpleContainer() {
    const classes = postPageStyle()

    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
            <Container className={classes.container}>
                <Posts />
                <CommentInput />
                <Comments />
            </Container>
        </React.Fragment>
    );
}

