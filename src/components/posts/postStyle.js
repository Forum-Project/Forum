import { makeStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

export const postStyle = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  card: {
    alignSelf: 'center',
    maxWidth: 1000,
    backgroundColor: grey[300],
    textAlign: 'left',
    margin: '2rem',
  },
  body: {
    backgroundColor: grey[100],
  },
  avatar: {
    backgroundColor: green[600],
  },
  tag: {
    fontSize: '0.750rem'
  },
}));