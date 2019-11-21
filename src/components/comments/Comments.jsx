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
    const { comments, setComments, loggedInUserId } = props
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {comments && comments.reverse().map((comment,index) => { return ( //we reverse to have the latest comments at the top
                <CommentsCard key={Date.now()+index} comment={comment} setComments={setComments} loggedInUserId={loggedInUserId}/>
            )})}
        </div>
    );
}

