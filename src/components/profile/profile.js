// Import react and other dependencies
import { React, useState, useEffect } from 'react';

//Import styling
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

// Set up functions to be used in the render
const useStyles = makeStyles(theme => ({
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
  const classes = useStyles();


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
      <Grid container alignItems="left" className={classes.root}>
        <profile icon>profile</profile>
        <Divider orientation="vertical" />
        <account icon>account</account>
        <Divider orientation="vertical" />
        <messages icon>messages</messages>
        <Divider orientation="vertical" />
        <subscriptions icon>subscriptions</subscriptions>
      </Grid>
      {/* Mid section for member overall account activity */}
      <section className = 'mid_section'>
        <h3 className = 'title'>Member Activity</h3>
        <div className = 'statsContent'>
          <div className = 'contentBox'>
            <icon></icon>
            <data></data>
            <p>posts</p>
          </div>
          <div className = 'contentBox'>
            <icon></icon>
            <data></data>
            <p>comments</p>
          </div>
          <div className = 'contentBox'>
            <icon></icon>
            <data></data>
            <p>likes</p>
          </div>
          <div className = 'contentBox'>
            <icon></icon>
            <data></data>
            <p>received likes</p>
          </div>
        </div>
      </section>
      {/* Bottom section containing the rest of the members info */}
      <h3 className = 'title'>Member Information</h3>
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
        <button>edit</button>
      </form>

      {/* Messages tab */}

      {/* Subscriptions/Favorites/Starred tab */}
      <div>
        {/* {map posts cards} */}
      </div>
    </div>
  )
}