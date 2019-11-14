import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Components Imported
import CommentsCard from './CommentsCard'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
        </div>
    );
}

