import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Paper, Box, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonStyle:{
    color: 'primary'
  },
  root: {
    '& .MuiTextField-root': {
      width: '95%',
      margin: theme.spacing(2),
      justifyContent: 'center'
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Box display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" 
      className={classes.root}>
        
      <Paper elevation="1">

      <form autoComplete="off">

        <Grid container>

          <TextField
            id="name-input"
            label="Name"
            value=''
          />

          <TextField
            id="email-input"
            label="Email"
            type="email"
          />

          <TextField
            id="message-input"
            label="Message"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
          />

          <Grid xs='5'/>

          <Grid item justifyContent='center'>
            <Button>
              Send
            </Button>
          </Grid>

          <Grid xs='5'/>

        </Grid>
        </form>
      </Paper>
    </Box>
  );
}