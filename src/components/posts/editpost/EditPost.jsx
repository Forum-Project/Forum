import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import Box from '@material-ui/core/Box'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

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
}))

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
}))(ToggleButtonGroup)

const EditPost = (props) => {
  const { currentPost, setCurrentPost, setIsEditing } = props
  const [values, setValues] = useState(currentPost)
  //formatting
  const [alignment, setAlignment] = useState('left')
  const [formats, setFormats] = useState(() => ['italic'])
  const domain = process.env.REACT_APP_DOMAIN || 'http://localhost:5000'

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats)
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  const handleChange = (event) => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.put(`${domain}/posts/${currentPost._id}`, values)
    .then(updatedPost => {
      setCurrentPost(updatedPost.data)
      setIsEditing(false)
    })
    .catch(error => console.log('Catch to edit the post was invoked:', error))
  }

  const classes = useStyles()
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
          label="Enter Your Post"
          margin="normal"
          variant="filled"
          name='post_body'
          onChange={handleChange}
          value={values.post_body}
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
  )
}

export default EditPost
