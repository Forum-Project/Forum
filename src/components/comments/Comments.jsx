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
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Comments
      </Typography>
            <Typography component="p">
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
            </Typography>
        </Paper>
    );
}

