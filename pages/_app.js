import { createMuiTheme, CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { orange } from "@material-ui/core/colors"
import { AuthProvider } from "../firebase/auth"

const myTheme = createMuiTheme({
  status: {
    danger: orange[500],
  }
})

function IESignatureApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={myTheme}>
      <CssBaseline />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MuiThemeProvider>
  )
}

export default IESignatureApp
