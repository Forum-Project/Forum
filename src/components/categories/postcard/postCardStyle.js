import { makeStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

export const postCardStyle = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    backgroundColor: grey[300],
    textAlign: 'left',
    margin: '2rem',
  },
  media: {
    maxHeight: 500,
    height: '100%',
    paddingTop: '56.25%', // 16:9
    backgroundColor: grey[500],
  },
  avatar: {
    backgroundColor: green[600],
  },
  tag: {
    fontSize: '0.750rem'
  },
  time_tooltip: {
    maxWidth: 350,
  },
}));