// library imports
import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import axios from 'axios'
// css and styles
import { postStyle } from './postStyle'

const Post = (props) => {
  const { post, user, loggedInUserId } = props
  const classes = postStyle()
  const domain = process.env.REACT_APP_DOMAIN || 'http://localhost:5000'
  
  const deletePost = () => {
    axios.delete(`${domain}/posts/${post._id}`)
    .then(deletedPost => props.history.goBack())
    .catch(err => console.log('Catch for deleting a post was invoked:', err))
  }

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
        title={post.post_title}
        titleTypographyProps={{ variant: 'h4' }}
        subheader={
          <Box>
            {new Date(post.post_date).toDateString()}
            <Box display='flex' justifyContent="flex-end" flexWrap='wrap' maxWidth='200' width='100%'>
              {post.post_tags && post.post_tags.map((tag, index) => {
                return (
                  <Button className={classes.tag} key={Date.now()+index} onClick={() => console.log(`${tag} brings you to a different page with only ${tag}-related results`)}>
                    #{tag}
                  </Button>
                )
              })}
            </Box>
          </Box>
        }
      />
      <CardContent className={classes.body}>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.post_body}
        </Typography>
      </CardContent>
      <CardContent className={classes.footer}>
        <Typography variant="body2" color="textSecondary" component="p">
          Posted by {user.username}
        </Typography>
        {post.user_id === loggedInUserId ? (
          <Box>
            <Button onClick={() => console.log('WIP')}>
              Edit
            </Button>
            <Button onClick={() => deletePost()}>
              Delete
            </Button>
          </Box>
        ) : <></>}
      </CardContent>
    </Card>
  )
}

export default Post