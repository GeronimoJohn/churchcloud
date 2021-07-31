import {
  Typography,
  Container,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export function VolunteerForm() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" className={classes.text}>
        This is a sample form
      </Typography>
      <form className={classes.form}>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Sino Sya?" variant="outlined" />
      </form>
    </Container>
  );
}

export default VolunteerForm;
