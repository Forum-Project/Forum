// library imports
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// image imports
import noImage from '../../assets/noImage.png'
// css and styles
import { postCardStyle } from './postCardStyle'

// function will trim length down to 140 characters
function trimBody(text) {
  if (text.length > 140) {
    // initialize new string that cuts down to 140 characters
    let trimmedString = text.substr(0, 140)
    // trims off last word if incomplete and adds elipses
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...'
    return trimmedString
  } else return text
}

const PostCard = (props) => {
  const { post } = props
  const classes = postCardStyle();

  return (
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
        subheader={post.post_date}
      />
      <CardMedia
        className={classes.media}
        image={post.post_img ? post.post_img : noImage}
        title={post.post_img_description ? post.post_img_description : 'No image'}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {trimBody(post.post_body)}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display='flex'>
          {/* map over tags here */}
          {post.post_category.map(tag => {
            return (
              <Button className={classes.tag} onClick={() => console.log(`${tag} brings you to a different page with only ${tag}-related results`)}>
                #{tag}
              </Button>
            )
          })}
        </Box> 
      </CardActions>
    </Card>
  );
}

export default PostCard