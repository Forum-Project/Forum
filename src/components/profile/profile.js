// Import react and other dependencies
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';

// Import styling
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent } from '@material-ui/core'; //Card Styling
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'; //Tab Styling
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'; //List Styling
import { Input, InputLabel, InputAdornment, FormControl } from '@material-ui/core'; //Form Styling
import { useSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


// Import Icons
import { Person, Settings, Email, Bookmark } from '@material-ui/icons'; //Grid Bar Icons
import BarChartIcon from '@material-ui/icons/BarChart'; //Stats
import { Create, Comment, ThumbUp, ThumbsUpDown } from '@material-ui/icons'; //Stats Icons
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'; //Member Info
import { AccountCircle, Lock, Face } from '@material-ui/icons'; //Form Icons

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

const formStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Profile() {
  // Set up state with hooks
  let [values, setValues] = useState({
    _id: '',
    user_avatar: '',
    username: '',
    password: '',
    confirm_password:'',
    email: '',
    showPassword: false,
    favorite_posts: []
  });
  let [edit, setEdit] = useState(false)
  const [tab, setTab] = React.useState(0);

  // Grab user information on render
  useEffect(() => {
    axios.get(``)
      .then(res => setValues(res))
      .catch(err => console.log(err))  
}, [])

  // Call In functions for the render
  const tabbed = tabStyles();
  const card = cardStyles();
  const list = listStyles();
  const form = formStyles();
  const badge = badgeStyles();
  const avatar = avatarStyles();
  

  // Set up functions to be used immediately
  const { enqueueSnackbar } = useSnackbar();
  // This should add the message at the bottom of the page to notify fail or success of submission
  const handleClickVariant = (variant, message) => () => {
    // Variant could be success, error, warning, info, or default
    enqueueSnackbar(`${message}`, { variant });
    setEdit(!edit);
  }; 
  // This handles the switch between tabs
  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };
  // Input handler
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // Change visibility
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  // Prevent page loading
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  // Change edit
  const handleEditButton = event => {
    event.preventDefault();
    setEdit(!edit);
  }
  // Handle submit
  const handleSubmit = () => {

  }


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
      <div className={tabbed.root}>
        <AppBar position="static">
          <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab label="Profile" icon={<Person/>} {...a11yProps(0)} />
            <Tab label="Account" icon={<Settings/>} {...a11yProps(1)} />
            <Tab label="Messages" icon={<Badge className={badge.margin} badgeContent={4} color="primary"> <Email/> </Badge>} {...a11yProps(2)} />
            <Tab label="Bookmarks" icon={<Bookmark/>} {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tab} index={0}>
          {/* Mid section for member overall account activity */}
          <section className = 'mid_section'>
            <BarChartIcon/><h3 className = 'title'>Member Activity</h3>
            <div className = 'statsContent'>
              <Card className={card.card}>
                <CardActionArea>
                  <Create/>
                  <CardContent>
                    <h2> 100 </h2>
                    <p> Forum Posts </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={card.card}>
                <CardActionArea>
                  <Comment/>
                  <CardContent>
                    <h2> 1000 </h2>
                    <p> Forum Comments </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={card.card}>
                <CardActionArea>
                  <ThumbUp/>
                  <CardContent>
                    <h2> 10 </h2>
                    <p> Likes </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={card.card}>
                <CardActionArea>
                  <ThumbsUpDown/>
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
        <TabPanel value={tab} index={1}>
          {/* Account settings tab */}
          {edit ?
          <FormControl className={form.margin} onSubmit={handleSubmit()}>
            <InputLabel htmlFor="input-with-icon-adornment">Avatar Image</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={values.user_avatar}
              onChange={handleChange('user_avatar')}
              startAdornment={
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={values.username}
              onChange={handleChange('username')}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={values.email}
              onChange={handleChange('email')}
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            /><InputLabel htmlFor="input-with-icon-adornment">Confirm Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.confirm_password}
              onChange={handleChange('confirm_password')}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button onClick={handleClickVariant('info', 'Loading...')}>Submit</Button>
          </FormControl>
          :
          <FormControl className={form.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">Avatar Image</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={values.user_avatar}
              disabled={true}
              startAdornment={
                <InputAdornment position="start">
                  <Face />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={values.username}
              disabled={true}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={values.email}
              disabled={true}
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
            />
            <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              disabled={true}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
            />
            <Button onClick={handleEditButton()}>edit</Button>
          </FormControl>}
        </TabPanel>
        <TabPanel value={tab} index={2}>
          {/* Messages tab */}
          <p> show me the message! </p>
        </TabPanel>
        <TabPanel value={tab} index={3}>
          {/* Bookmarks tab */}
          <div>
            {/* {values.favorite_posts.map( e => {
              // display post cards
            })} */}
          </div>
        </TabPanel>
      </div>
    </div>
  )
}