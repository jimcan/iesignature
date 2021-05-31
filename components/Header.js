import React from 'react'
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <AppBar elevation={1} color='transparent'>
        <Toolbar className={classes.toolbar}>
          <div className={classes.titleColumn}>
            <img width={200} height={100} src="/Company Logo.svg" alt="Logo" />
            {/* <Typography variant='h6'>IE Signature</Typography> */}
          </div>
          <div className={classes.navColumn}>
            <Button>Sign up</Button>
            <div>
              <Button>Home</Button>
              <Button>About</Button>
              <Button>Contact</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
