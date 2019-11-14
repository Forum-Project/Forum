import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));


export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default styles;
