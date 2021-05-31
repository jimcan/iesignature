import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { AddShoppingCart, Search, ShoppingCart } from '@material-ui/icons'
import { Spacer } from './misc/Spacer'
import { Width200Right } from './misc/Width200Right'
import { Width200Left } from './misc/Width200Left'
import { CenterFlex } from './misc/CenterFlex'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundImage: 'linear-gradient(125deg, #a6671455, #ffffffff, #debaa655)',
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
  },
  navRow: {
    position: 'sticky',
    top: 0,
    background: theme.palette.primary.light,
  },
  navRowInner: {
    maxWidth: 1200,
    display: 'flex',
    padding: theme.spacing(1),
  },
  headerInner: {
    maxWidth: 1200,
    display: 'flex',
    backgroundImage: 'linear-gradient(125deg, #a6671455, #ffffffff, #debaa655)',
    padding: theme.spacing(2),
  },
  companyName: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <Container className={classes.headerInner}>
          {/* <IconButton><ShoppingCart /></IconButton> */}
          <Width200Left />
          <CenterFlex>
            <img src="/CompanyLogo.png" alt="Company Logo" height={100} />
          </CenterFlex>
          <Width200Right>
            <IconButton><ShoppingCart fontSize='large' /></IconButton>
          </Width200Right>
        </Container>
      </div>
      <div className={classes.navRow}>
        <Container className={classes.navRowInner}>
          <Width200Left />
          <CenterFlex>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </CenterFlex>
          <Width200Right>
            <IconButton><Search /></IconButton>
          </Width200Right>
        </Container>
      </div>
    </>
  )
}
