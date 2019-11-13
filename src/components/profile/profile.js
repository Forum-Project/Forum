// Import react and other dependencies
import { React, useState, useEffect } from 'react';

// Import styling
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent } from '@material-ui/core'; //Card Styling
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'; //Tab Styling
import Typography from '@material-ui/core/Typography';
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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = tabStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

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
  const [value, setValue] = React.useState(0);

  // Grab user information on render


  // Call In functions for the render
  const tab = tabStyles();
  const card = cardStyles();  


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
      <div className={tab.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Profile" icon={<PersonIcon/>} {...a11yProps(0)} />
            <Tab label="Account" icon={<SettingsIcon/>} {...a11yProps(1)} />
            <Tab label="Messages" icon={<EmailIcon/>} {...a11yProps(2)} />
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