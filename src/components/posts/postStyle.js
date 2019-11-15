import { makeStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

export const postStyle = makeStyles(theme => ({
  card: {
    alignSelf: 'center',
    backgroundColor: grey[300],
    textAlign: 'left',
    maxWidth: 1000,
    width: '100%',
  },
  body: {
    backgroundColor: grey[100],
  },
  avatar: {
    backgroundColor: green[600],
  },
  tag: {
    fontSize: '0.650rem'
  },
}));