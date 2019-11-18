import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography"; // not sure what this is for, but material-ui was using it
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import styles, { FilterDiv } from './FilterStyle';

/*
  Notes
  - Do better validating on tag entries, right now you can enter a space or tab
  - Need to verify responsiveness
 */

const options = ['Submit filter', 'Clear all tags'];

const Filter = (props) => {
  const tags = props.tags;
  const setTags = props.setTags;
  const [tagField, setTagField] = useState('');
  const classes = styles();
  let domain = 'localhost:5000';
  let categoryID = props.categoryID || 0; // probably should get a better default

  const [open, setOpen] = useState(false); // for the submit button
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateField = event => setTagField(event.target.value);



  //decodeRequest();

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
    if(tagField.trim() === '') return false;
    if (tags.includes(tagField)) return false; // warn them the tag exists (later)
    setTags([...tags, tagField]);
    setTagField('');
  };

  const removeTag = event => {
    event.persist();
    console.log(event);
    let updated = tags.filter(tag => event.target.textContent !== tag); // filter out the matching tag from the list
    setTags(updated); // update with the tag filtered out
  };

  const clearTags = () => {
    setTags([]); // clear all tags in the hook so the component updates with the empty list
    // we're going to need to push a request bag to the post container so it can fetch with the filter
  };

  const submitFilter = () => {
    // generate the proper link to make the request and pass back to post list?
    if (tags.length < 1) return false;
    props.handleSubmit();
  };


  return (
    <>
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
              <Button variant='outlined' className={classes.button}>
                <span onClick={removeTag}>{tag}</span>
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
    </>
  );
};

export default Filter;