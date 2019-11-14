import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Importing Components
import Posts from '../posts/Post'
import Comments from '../comments/Comments'
import CommentInput from '../comment-text/CommentAdd'


export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Posts />
                <CommentInput />
                <Comments />
            </Container>
        </React.Fragment>
    );
}

