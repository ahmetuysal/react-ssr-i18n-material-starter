import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  logo: {
    height: 48,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  spacer: {
    flex: '1 1 auto',
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <nav className="flex items-center w-full container mx-auto px-4">
          <Link href="/">
            <a href="/">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className={classes.logo}
                draggable={false}
              />
            </a>
          </Link>
          <span className={classes.spacer} />
          <Link href="/cta">
            <Button
              variant="contained"
              color="primary"
              href="/cta"
            >
              TODO: Call to Action
            </Button>
          </Link>

          <Link href="/login">
            <Button
              href="/login"
              color="secondary"
              className="ml-2"
            >
              {t('NAV_BAR.LOGIN')}
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              href="/signup"
              variant="outlined"
              color="secondary"
              className="ml-2"
            >
              {t('NAV_BAR.SIGN_UP')}
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
