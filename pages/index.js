import React from 'react'
import Head from 'next/head'
import {
  Box,
  Button,
  FormGroup,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography
} from '@material-ui/core'
import Header from '../components/Header'

const useStyles = makeStyles(theme => ({
  form: {
    // paddingTop: 200,
    // height: 'auto',
    // width: 500,
    minHeight: '100vh',
    // margin: 'auto',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formCard: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  toolbar: {
    padding: theme.spacing(3),
  },
  titleColumn: {
    display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  navColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 'inherit',
  }
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>IE Signature</title>
      </Head>
      <Header />
      <Grid
        container
        alignItems='center'
        justify='center'
        className={classes.form}
      >
        <Paper className={classes.formCard}>
          <FormGroup>
            <Typography align='center' variant='h4'>SIGN IN</Typography>
            <div className={classes.buttonRow}>
              <Typography align='center' variant='subtitle2'>Does not have an account?</Typography>
              <Button>Sign up</Button>
            </div>
            <Box height={20} />
            <TextField
              variant='outlined'
              margin='dense'
              label='Email'
            />
            <Box height={10} />
            <TextField
              variant='outlined'
              margin='dense'
              label='Password'
              type='password'
            />
            <Box height={20} />
            <Button color='primary' variant='outlined'>
              Sign in
            </Button>
            <Box height={20} />
            <Typography align='center' variant='subtitle2'>or</Typography>
            <Box height={10} />
            <div className={classes.buttonRow}>
              <Typography align='center' variant='subtitle2'>Sign in with</Typography>
              <IconButton>
                <img width={30} height={30} src="/google.png" alt="google" />
              </IconButton>
            </div>
          </FormGroup>
        </Paper>
      </Grid>
    </>
  )
}
