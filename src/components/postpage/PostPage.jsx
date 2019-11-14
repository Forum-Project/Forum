import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Importing Components
import Posts from '../posts/Post'
import PostCard from '../categories/postcard/PostCard'
import Comments from '../comments/Comments'

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Posts />
                <Comments />
            </Container>
        </React.Fragment>
    );
}

