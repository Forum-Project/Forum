import React, { useState, useRef } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import axios from 'axios'
import Filter from '../../filter/Filter';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography"; // not sure what this is for, but material-ui was using it
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import styles, { FilterDiv } from '../../filter/FilterStyle';

const options = ['Submit filter', 'Clear all tags'];

// component imports 


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    border: `.5px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 600
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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600
  },
  flex: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex2: {
    display: 'flex',
    flexFlow: 'column wrap',
  }
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



function Post(props) {
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['italic']);
  const [tags, setTags] = useState([]);
  const [tagField, setTagField] = useState('');
  let domain = 'localhost:5000';
  let categoryID = props.categoryID || 0; // probably should get a better default

  const [open, setOpen] = useState(false); // for the submit button
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const tagEscapedSymbols = ['?', '&', '+', '#'];

  const updateField = event => setTagField(event.target.value);
  const [post, setPost] = useState({
    post_title: '',
    post_body: '',
    post_date: Date.now(),
    post_tag: [],
    post_category: ''
  });


  const buildRequest = () => {
    let reduced = tags.reduce((acc, tag) => {
      tag = encodeURIComponent(tag);
      return tags.push(tag);
    });
    console.log('@@@@@@', tags);
    tags.map(posts => {
      console.log(posts)
    })
    console.log('@@@', post);
    setPost({ ...post, post_tag: tags })

    // request built, send it back through hook to controller
  };

  const dropdownClick = () => {
    // do stuff for clicked item in dropdown
    if (options[selectedIndex] === 'Submit filter') submitFilter();
    else if (options[selectedIndex] === 'Clear all tags') clearTags();
  };

  const dropdownMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    if (options[index] === 'Submit filter') submitFilter();
    else if (options[index] === 'Clear all tags') clearTags();
  };

  const dropdownToggle = () => {
    setOpen(prevOpen => !prevOpen); // didn't realize you could pass callbacks into hooks
  };

  const dropdownClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const addTag = event => {
    event.preventDefault();
    if (typeof tagField === 'string' && tagField.length < 1) return false; // maybe warn them to add something to the field (later)
    if (tags.includes(tagField)) return false; // warn them the tag exists (later)
    setTags([...tags, tagField]);
    setTagField('');
  };

  const removeTag = event => {
    let updated = tags.filter(tag => event.target.value !== tag); // filter out the matching tag from the list
    setTags(updated); // update with the tag filtered out
  };

  const clearTags = () => {
    setTags([]); // clear all tags in the hook so the component updates with the empty list
    // we're going to need to push a request bag to the post container so it can fetch with the filter
  };

  const submitFilter = () => {
    // generate the proper link to make the request and pass back to post list?
    if (tags.length < 1) return false;
    buildRequest();
  };

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);

  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
    // console.log(post)
  }


  const onSubmit = (e) => {
    e.preventDefault()
    // setPost({...post, post_date: Date.now()})
    console.log('post', post)
    axios.post('localhost:5000/posts', post)
      .then(res => console.log('Hey there Andy', res))
      .catch(err => console.log(err))
  }

  const classes = useStyles();

  return (

    <form className={classes.container}
      noValidate
      onSubmit={onSubmit}
      autoComplete="off">
      <div classname={classes.flex}>
        <TextField
          id="filled-basic"
          className={classes.textField, classes.flex2}
          multiline={true}
          rows={10}
          label="Enter Your Title"
          margin="normal"
          variant="filled"
          name='post_title'
          onChange={handleChange}
        />

        <TextField
          id="filled-basic"
          className={classes.textField, classes.flex2}
          multiline={true}
          rows={10}
          label="Enter Your Post"
          margin="normal"
          variant="filled"
          name='post_body'
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
      </div>
      <CssBaseline />
      <Container maxWidth='sm'>
        <FilterDiv>
          <form className='tagFilter' onSubmit={addTag}>
            <div style={{ display: 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
              <TextField
                id='tag'
                className={classes.textField}
                label='Tags'
                margin='normal'
                variant='filled'
                onChange={updateField}
                value={tagField}
              />
              <Button variant='contained' className={classes.button} onClick={addTag}>
                Add Tag
              </Button>
            </div>
          </form>
        </FilterDiv>
        <div className='tagContainer'>
          {tags.map(tag => {
            return (
              <Button variant='outlined' className={classes.button} onClick={removeTag}>
                {tag}
              </Button>
            );
          })}
        </div>
        <div className='submitContainer'>
          <Grid container direction='column' alignItems='center'>
            <Grid item xs={12}>
              <ButtonGroup variant='contained' color='primary' ref={anchorRef} aria-label='split button'>
                <Button onClick={dropdownClick}>{options[selectedIndex]}</Button>
                <Button
                  color='primary'
                  size='small'
                  aria-control={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label='select merge strategy'
                  aria-haspopup='menu'
                  onClick={dropdownToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow {...TransitionProps} style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}>
                    <Paper>
                      <ClickAwayListener onClickAway={dropdownClose}>
                        <MenuList id='split-button-menu'>
                          {options.map((option, index) => {
                            return (
                              <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={event => dropdownMenuItemClick(event, index)}
                              >
                                {option}
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </form>

  );
}


export default Post
