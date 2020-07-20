import React, { useEffect } from 'react';
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import App, { AppContext, AppProps } from 'next/app';
import muiTheme from '../theme';
import { Footer, NavBar } from '../components';
import '../styles/index.css';
import i18n from '../i18n';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    marginTop: 56,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // This is how breakpoints can be used in TS side
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
}));

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const classes = useStyles();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <NavBar />
            <div className={classes.content}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
  };
};

export default i18n.appWithTranslation(MyApp);
