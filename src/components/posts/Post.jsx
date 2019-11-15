// library imports
import React, { useEffect, useState } from 'react'
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
  // const { post } = props
  const [post, setPost] = useState({ _id: '5dceeead7bd912553c9fc24c' }) //delete once we have props working and uncomment aboove
  const [pulledPost, setPulledPost] = useState({})
  const [user, setUser] = useState({})
  const classes = postStyle()
  const backend = 'http://localhost:5000'

  useEffect(() => {
    if (post._id) {
      axios.get(`${backend}/posts/${post._id}`)
      .then(postData => {
        //populates pulledPost with data from BE before grabbing user data
        setPulledPost(postData.data)
        axios.get(`${backend}/users/${postData.data.user_id}`)
        .then(userData => setUser(userData.data))
        .catch(err => console.log('Catch for user was invoked:', err))
      })
      .catch(err => console.log('Catch for post was invoked:', err))
    }
  }, [])

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
        title={pulledPost.post_title}
        titleTypographyProps={{ variant: 'h4' }}
        subheader={
          <Box>
            {pulledPost.post_date}
            <Box display='flex' justifyContent="flex-end" flexWrap='wrap' maxWidth='200' width='100%'>
              {pulledPost.post_tags && pulledPost.post_tags.map((tag, index) => {
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
          {pulledPost.post_body}
        </Typography>
      </CardContent>
      <CardContent className={classes.footer}>
        <Typography variant="body2" color="textSecondary" component="p">
          Posted by {user.username}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Post