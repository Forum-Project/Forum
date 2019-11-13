// Import react and other dependencies
import { React, useState, useEffect } from 'react';

// Import styling
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent } from '@material-ui/core'; //Card Styling
import { AppBar, Tabs, Tab, Box, PropTypes } from '@material-ui/core'; //Tab Styling
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'; //List Styling
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

// Import Icons
import { PersonIcon, SettingsIcon, EmailIcon, BookmarkIcon } from '@material-ui/icons'; //Grid Bar Icons
import BarChartIcon from '@material-ui/icons/BarChart'; //Stats
import { CreateIcon, CommentIcon, ThumbUpIcon, ThumbsUpDownIcon } from '@material-ui/icons'; //Stats Icons
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'; //Member Info

// Set up functions to be used in the render
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const tabStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

const badgeStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

const listStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const avatarStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
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
  const [value, setValue] = React.useState(0);

  // Grab user information on render


  // Call In functions for the render
  const tab = tabStyles();
  const card = cardStyles();
  const list = listStyles();
  const badge = badgeStyles();
  const avatar = avatarStyles();


  // Set up functions to be used immediately
  // This should add the message at the bottom of the page to notify fail or success of submission
  const handleClickVariant = (variant, message) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${message}`, { variant });
  }; 
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };


  return(
    <div className = 'container'>
      {/* Top section dedicated to basic info on the user along with profile image */}
      <section className = 'top_section'>
        <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" className={avatar.bigAvatar} />
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
      <div className={tab.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab label="Profile" icon={<PersonIcon/>} {...a11yProps(0)} />
            <Tab label="Account" icon={<SettingsIcon/>} {...a11yProps(1)} />
            <Tab label="Messages" icon={<Badge className={badge.margin} badgeContent={4} color="primary"> <EmailIcon/> </Badge>} {...a11yProps(2)} />
            <Tab label="Bookmarks" icon={<BookmarkIcon/>} {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
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
                  <ThumbsUpDownIcon/>
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
            <List component="nav" className={list.root} aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Last Active" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Location" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Email" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Signature" />
              </ListItem>
            </List>
            <List component="nav" className={list.root} aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="Time" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="3rd Floor" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Test@Me.com" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="We are all meant for greatness!" />
              </ListItem>
            </List>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* Messages tab */}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {/* Bookmarks tab */}
          <div>
            {/* {map posts cards} */}
          </div>
        </TabPanel>
      </div>
    </div>
  )
}