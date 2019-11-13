// library imports
import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// css and styles
import { postStyle } from './postStyle'

const PostCard = (props) => {
  // const { post } = props
  const classes = postStyle();
  const post = {
    post_title: "Another test post",
    post_body: 'this is a really long body description just to test if i can use a function that limits the amount of characters that will be seen in the post body. We want the user to be enticed by what is about to be said in the post so that they have to click on it and be redirected to the entirety of the post',
    post_date: 'November 12, 2019',
    post_category: ['test', 'moretests', 'evenmoretest', 'plsno'],
  }

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {/* profile image here, otherwise initials of person? */}
              R
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
              {post.post_date}
              <Box display='flex' justifyContent="flex-end">
                {/* map over tags here */}
                {post.post_category.map(tag => {
                  return (
                    <Button className={classes.tag} onClick={() => console.log(`${tag} brings you to a different page with only ${tag}-related results`)}>
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
      </Card>

      {/* form text area for adding comments */}
      <div>New comment here</div>
      
      {/* map over comments here */}

    </Container>
  );
}

export default PostCard