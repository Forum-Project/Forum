import React, { useState } from 'react';
import axios from 'axios'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1000,
    width: '100%',
  },
  paper: {
    display: 'flex',
    border: `.5px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  divider: {
    alignSelf: 'stretch',
    height: 'auto',
    margin: theme.spacing(1, -10.5),
    transform: 'skew(-15deg, -15deg)',
  },
  button: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  textField: {
    input1: {
      height: 600
    },
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    maxWidth: 1000,
    width: '100%',
  },
  box: {
    maxWidth: 1000,
    width: '100%',
  },
}));

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    padding: theme.spacing(0, 1),
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);



function CreateComments(props) {
  const { postId, setComments } = props
  const [alignment, setAlignment] = useState('left');
  const [values, setValues] = useState({
    comments_body: '',
    comments_timestamp: Date.now(), //will need to update once actual comment is made
    user_id: "5dcdbae07d7e2d258cdf6f40", //needs to somehow get the id of the logged in user to insert into comment; currently set to admintest
    post_id: postId //for some reason, this is coming up as undefined; will need to set post_id somewhere else?
  });
  const [formats, setFormats] = useState(() => ['italic']);
  const domain = 'localhost:5000'


  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);

  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    // console.log('WHAT ARE THESE VALUES', values)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('MOM WAS HERE', values)
    //create a variable here containing the linked post id as well as updated timestamp
    const editedValues = {...values, comments_timestamp: Date.now(), post_id: postId}
    axios.post( `http://${domain}/comments`, editedValues )
      .then(function (response) {
        console.log('WHOA THERE', response)
        axios.get(`http://${domain}/posts/${postId}/comments`)
        .then(updatedComments => {
          setComments(updatedComments.data)
          //reset body to blank
          setValues({...values, comments_body: ''})
        })
        .catch(error => console.log('ANOTHER ERROR FOR YOU', error))
      })
      .catch(function (error) {
        console.log('SHOW THAT FUNKY ERROR', error)
      })
  }

  const classes = useStyles();
  return (
    <form className={classes.container}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off">
      <Box className={classes.box}>
        <TextField
          id="filled-basic"
          className={classes.textField}
          multiline={true}
          rows={10}
          label="Enter Your Comment"
          margin="normal"
          variant="filled"
          name='comments_body'
          onChange={handleChange}
        />


        <Paper elevation={0} className={classes.paper}>
          <StyledToggleButtonGroup
            size="small"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned">
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Divider orientation="vertical" className={classes.divider} />
          <StyledToggleButtonGroup
            size="small"
            value={formats}
            onChange={handleFormat}
            arial-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Button

            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            Submit
          </Button>
        </Paper>
      </Box>
    </form>
  );
}

export default CreateComments
