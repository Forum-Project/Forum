// Import react and other dependencies
import { React, useState, useEffect } from 'react';

// Import styling
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// Import Icons
import PersonIcon from '@material-ui/icons/Person'; //Profile
import SettingsIcon from '@material-ui/icons/Settings'; //Settings
import EmailIcon from '@material-ui/icons/Email'; //Messages
import BookmarkIcon from '@material-ui/icons/Bookmark'; //Favorites
import BarChartIcon from '@material-ui/icons/BarChart'; //Stats
import CreateIcon from '@material-ui/icons/Create'; //Posts made
import CommentIcon from '@material-ui/icons/Comment'; //Comments made
import ThumbUpIcon from '@material-ui/icons/ThumbUp'; //Likes Given/Likes received
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'; //Member info

// Set up functions to be used in the render
const gridStyles = makeStyles(theme => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(2),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

const cardStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Profile() {
  // Set up state with hooks
  let [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    user_avatar: ''
  });
  let [edit, setEdit] = useState(false)
  let [profile, setProfile] = useState(true)
  let [account, setAccount] = useState(false)
  let [message, setMessage] = useState(false)
  let [subscription, setSubscription] = useState(false)

  // Grab user information on render


  // Call In functions for the render
  const grid = gridStyles();
  const card = cardStyles();


  // Set up functions to be used immediately
  // This should add the message at the bottom of the page to notify fail or success of submission
  const handleClickVariant = (variant, message) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${message}`, { variant });
  }; 


  return(
    <div className = 'container'>
      {/* Top section dedicated to basic info on the user along with profile image */}
      <section className = 'top_section'>
        <img src = 'user_avater' alt = 'profile picture' /> 
        <div className = 'user basic info'>
          <h2 className = 'Username'>username</h2>
          <div className = 'basicInfo'>
            <p>account status: <span>moderator</span></p>
            <p>joined: <span>date</span></p>
            <p>title: <span>receptionist</span></p>
          </div>
        </div>
      </section>
      {/* Content bar for checking profile stats, changing account information(edit), checking messages and subscriptions(favorites) */}
      <Grid container alignItems="left" className={grid.root}>
        <Tooltip title="Profile" placement="bottom">
          <PersonIcon/><h3>Profile</h3>
        </Tooltip>
        <Divider orientation="vertical" />
        <Tooltip title="Account" placement="bottom">
          <SettingsIcon/><h3>Account</h3>
        </Tooltip>
        <Divider orientation="vertical" />
        <Tooltip title="Messages" placement="bottom">
          <EmailIcon/><h3>Messages</h3>
        </Tooltip>
        <Divider orientation="vertical" />
        <Tooltip title="Bookmark" placement="bottom">
          <BookmarkIcon/><h3>Bookmarked</h3>
        </Tooltip>
      </Grid>
      {/* Mid section for member overall account activity */}
      <section className = 'mid_section'>
        <BarChartIcon/><h3 className = 'title'>Member Activity</h3>
        <div className = 'statsContent'>
          <Card className={card.card}>
            <CardActionArea>
              <CreateIcon/>
              <CardContent>
                <h2> 100 </h2>
                <p> Forum Posts </p>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={card.card}>
            <CardActionArea>
              <CommentIcon/>
              <CardContent>
                <h2> 1000 </h2>
                <p> Forum Comments </p>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={card.card}>
            <CardActionArea>
              <ThumbUpIcon/>
              <CardContent>
                <h2> 10 </h2>
                <p> Likes </p>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={card.card}>
            <CardActionArea>
              <ThumbUpIcon/>
              <CardContent>
                <h2> 1 </h2>
                <p> Received Likes </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </section>
      {/* Bottom section containing the rest of the members info */}
      <ViewHeadlineIcon/><h3 className = 'title'>Member Information</h3>
      <div className = 'infoContent'>
        <section className = 'leftside'>
          <h4 className = 'listItem'>Last Active</h4>
          <h4 className = 'listItem'>Location</h4>
          <h4 className = 'listItem'>Email</h4>
          <h4 className = 'listItem'>Signature</h4>
        </section>
        <section className = 'rightside'>
          <h4 className = 'listItem right'>time</h4>
          <h4 className = 'listItem right'>3rd floor</h4>
          <h4 className = 'listItem right'>test@me.com</h4>
          <h4 className = 'listItem right'>We are all meant for greatness</h4>
        </section>
      </div>

      {/* Account settings tab */}
      <form>
        <input>
        username
        </input>
        <input>
        email
        </input>
        <input>
        password
        </input>
        <input>
        avatar image
        </input>
        <button onClick={handleClickVariant('info', 'Loading...')}>edit</button>
      </form>

      {/* Messages tab */}

      {/* Subscriptions/Favorites/Starred tab */}
      <div>
        {/* {map posts cards} */}
      </div>
    </div>
  )
}