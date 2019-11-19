import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components Imported
import CommentsCard from './CommentsCard'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 0),
    },
}));

export default function PaperSheet(props) {
    const { comments, setComments } = props
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {comments && comments.map((comment,index) => { return (
                <CommentsCard key={Date.now()+index} comment={comment} setComments={setComments}/>
            )})}
        </div>
    );
}

