// Import react and other dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Import styling
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent } from '@material-ui/core'; //Card Styling
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'; //Tab Styling
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'; //List Styling
import { Input, InputLabel, InputAdornment, FormControl } from '@material-ui/core'; //Form Styling
import { IconButton, Typography, Badge, Avatar, Button } from '@material-ui/core'; //Misc Items
import styled from 'styled-components';


// Import Icons
import { Person, Settings, Email, Bookmark } from '@material-ui/icons'; //Grid Bar Icons
import BarChartIcon from '@material-ui/icons/BarChart'; //Stats
import { Create, Comment, ThumbUp, ThumbsUpDown } from '@material-ui/icons'; //Stats Icons
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'; //Member Info
import { AccountCircle, Lock, Face, Visibility, VisibilityOff } from '@material-ui/icons'; //Form Icons
import { black, green } from 'material-ui/styles/colors'; // Color Imports for MuiTheme and makeStyles

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

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
})

const tabStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: black,
  },
  changeColor: {
    backgroundColor: 'green'
  }
}));

const cardStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: '22.5%',
    paddingTop: 20,
    textAlign: 'center',
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
    minWidth: '30%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const avatarStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 120,
    height: 120,
    margin: 10,
    color: '#fff',
    fontSize: '2rem * .625'
  },
});

const formStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


// Set Up Styled Components
const Container = styled.div`
width: 90%;
max-width: 1200px;
margin: 0 auto;
`

const TopSection = styled.section`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin:10px 0;
`

const UserInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
color: black;
`

const UserInfoList = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
line-height: 1;
`

const MidSection = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
margin:10px 0;
`

const MemberActivity = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: nowrap;
align-items: center;
margin:10px 0;
`
const BotSection = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
margin:10px 0;
`

const MemberInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const FormStyles = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

// Multiple Item Tags
const Name = styled.h2`
font-size: 3rem * .625;
`

const PTag = styled.p`
font-size: 2rem * .625;
line-height: 1;
margin: 0;
`

const Title = styled.h3`

`

const BoxDesign = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
border-top: 1px solid black;
border-bottom: 1px solid black;
background-color: lightgreen;
margin: 10px 0;
drop-shadow: 10;
`


const Profile = (props) => {
  // Set up state with hooks
  const [edit, setEdit] = useState(false)
  const [tab, setTab] = useState(0);
  // const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({
    _id: '',
    // user_avatar: '',
    username: '',
    password: '',
    new_password: '',
    email: '',
    showPassword: false,
    showPassword2: false,
    // favorite_posts: [],
    user_permission: 0,
    _v: 0
  });

  // Grab user information on render
  useEffect(() => {      
    if (localStorage.getItem('token')){
      const decode = jwtDecode(localStorage.getItem('token'))
      console.log(decode)
      axios.get(`http://localhost:5000/users/${decode.subject}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
    }
  }, [])

  // Call In functions for the render
  const tabbed = tabStyles();
  const card = cardStyles();
  const list = listStyles();
  const form = formStyles();
  const badge = badgeStyles();
  const avatar = avatarStyles();


  // Set up functions to be used immediately
  // const { enqueueSnackbar } = useSnackbar();
  // // This should add the message at the bottom of the page to notify fail or success of submission
  // const handleClickVariant = (variant, message) => () => {
  //   // Variant could be success, error, warning, info, or default
  //   enqueueSnackbar(`${message}`, { variant });
  //   setEdit(!edit);
  // }; 
  // This handles the switch between tabs
  const handleTabChange = (event, newTab) => {
    setTab(newTab);
  };
  // Input handler
  const handleChange = event => {
    console.log(event)
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  // Change visibility
  const handleClickShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };
  // Prevent page loading
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  // Change visibility
  const handleClickShowPassword2 = () => {
    setUser({ ...user, showPassword2: !user.showPassword2 });
  };
  // Prevent page loading
  const handleMouseDownPassword2 = event => {
    event.preventDefault();
  };
  // Change edit
  const handleEditButton = event => {
    event.preventDefault();
    setEdit(!edit);
  }
  // Handle submit
  const handleSubmit = event => {
    event.preventDefault();
    //logic for axios put
    setEdit(!edit);
  }


  return (
    <Container>
      {/* Top section dedicated to basic info on the user along with profile image */}
      <TopSection>
        <Avatar className={avatar.bigAvatar} >T</Avatar>
        <UserInfo>
          <Name>{user.username}</Name>
          <UserInfoList>
            <PTag>Title: <span>receptionist</span></PTag>
            <PTag>Joined: <span>date</span></PTag>
            <PTag>Account Status: <span>moderator</span></PTag>
          </UserInfoList>
        </UserInfo>
      </TopSection>
      {/* Content bar for checking profile stats, changing account information(edit), checking messages and subscriptions(favorites) */}
      <div className={tabbed.root}>
        <ThemeProvider theme={theme}>
          <AppBar position="static" color='primary' className={tabbed.changeColor}>
            <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
              <Tab label="Profile" icon={<Person />} {...a11yProps(0)} />
              <Tab label="Account" icon={<Settings />} {...a11yProps(1)} />
              <Tab label="Messages" icon={<Badge className={badge.margin} badgeContent={4} color="primary"> <Email /> </Badge>} {...a11yProps(2)} />
              <Tab label="Bookmarks" icon={<Bookmark />} {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </ThemeProvider>
        <TabPanel value={tab} index={0}>
          {/* Mid section for member overall account activity */}
          <MidSection>
            <BoxDesign>
              <BarChartIcon /><Title>Member Activity</Title>
            </BoxDesign>
            <MemberActivity>
              <Card className={card.card}>
                <CardActionArea>
                  <Create />
                  <CardContent>
                    <h2> 100 </h2>
                    <p> Forum Posts </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={card.card}>
                <CardActionArea>
                  <Comment />
                  <CardContent>
                    <h2> 1000 </h2>
                    <p> Forum Comments </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={card.card}>
                <CardActionArea>
                  <ThumbUp />
                  <CardContent>
                    <h2> 10 </h2>
                    <p> Likes </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card className={card.card}>
                <CardActionArea>
                  <ThumbsUpDown />
                  <CardContent>
                    <h2> 1 </h2>
                    <p> Received Likes </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </MemberActivity>
          </MidSection>
          {/* Bottom section containing the rest of the members info */}
          <BotSection>
            <BoxDesign>
              <ViewHeadlineIcon /><Title>Member Information</Title>
            </BoxDesign>
            <MemberInfo>
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
                  <ListItemText primary={user.email} />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="We are all meant for greatness!" />
                </ListItem>
              </List>
            </MemberInfo>
          </BotSection>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          {/* Account settings tab */}
          {edit ?
          <form>
            <FormStyles>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Avatar Image</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value={user.user_avatar}
                  type='text'
                  name='user_avatar'
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <Face />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value={user.username}
                  type='text'
                  name='username'
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value={user.email}
                  type='text'
                  name='email'
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Old Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={user.showPassword ? 'text' : 'password'}
                  value={user.password}
                  name='password'
                  onChange={handleChange}
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
                        {user.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">New Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={user.showPassword2 ? 'text' : 'password'}
                  value={user.new_password}
                  name='new_password'
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                      >
                        {user.showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button onClick={handleSubmit}>Submit</Button>
            </FormStyles>
          </form>
          :
          <form>
            <FormStyles>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Avatar Image</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value={user.user_avatar}
                  disabled={true}
                  startAdornment={
                    <InputAdornment position="start">
                      <Face />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value={user.username}
                  disabled={true}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  value={user.email}
                  disabled={true}
                  startAdornment={
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className={form.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={'password'}
                  value={user.password}
                  disabled={true}
                  startAdornment={
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  }
                />
                <Button onClick={handleEditButton}>edit</Button>
              </FormControl>
            </FormStyles>
          </form>}
        </TabPanel>
        <TabPanel value={tab} index={2}>
          {/* Messages tab */}
          <p> show me the message! </p>
        </TabPanel>
        <TabPanel value={tab} index={3}>
          {/* Bookmarks tab */}
          <div>
            {/* {user.favorite_posts.map( e => {
              // display post cards
            })} */}
          </div>
        </TabPanel>
      </div>
    </Container>
  )
}

export default Profile;