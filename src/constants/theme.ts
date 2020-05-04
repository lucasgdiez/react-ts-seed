import { createMuiTheme } from '@material-ui/core/styles';

/* Custom theme defined for the whole App
   Ref to https://material-ui.com/customization/theming/#theme-configuration-variables
   for API exposure of consumables
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
