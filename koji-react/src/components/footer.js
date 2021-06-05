import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#0000bd',
    color: '#fff',
    paddingBottom: `${theme.spacing(3)}px`,
    paddingTop: `${theme.spacing(3)}px`,
    flexShrink: 0,
    bottom: 0,
    overflowY: 'hidden', // of the footer please TODO: fix better than this
    fontSize: '0.75em',
  },

  appLogo: {
    height: 34,
    maxWidth: 125,
    [theme.breakpoints.up('md')]: {
      height: 34
    }
  },

  footerContainer: {
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingBottom: `${theme.spacing(1)}px`,
      paddingTop: `${theme.spacing(1)}px`,
    }
  },

  socialsContainer: {
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingBottom: `${theme.spacing(1)}px`,
      paddingTop: `${theme.spacing(1)}px`,
    }
  },

  label: {
    display: 'block',
    padding: '0 0 4px',
    color: '#fff'
  },

  link: {
    display: 'block',
    
    padding: '0 0 4px',
    textDecoration: 'underline',
    color: '#fff'
  }
}));


const CustomFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container>
        {/* BEGIN: Logo */}
        <Grid item container className={classes.footerContainer} xs={12} md={3} alignItems='center' style={{ textAlign: 'center', flexDirection: 'column' }}>
          <Grid item>
            <Link to="/">
              <img
                src="/tracer-logo.png"
                className={classes.appLogo}
                alt='Tracer'
              />
            </Link>
          </Grid>
        </Grid>
        {/* END: Logo */}
        <Grid item container className={classes.footerContainer} xs={12} md={6} alignItems='center' style={{ textAlign: 'center' }}>
          <Grid item xs={4}>
            <Link to="/whitepapers" className={classes.link}>Whitepapers</Link>
          </Grid>
          <Grid item xs={4}>
            <a href="https://discourse.tracer.finance" rel="noreferrer noopener" target="_blank" className={classes.link}>Discourse</a>
          </Grid>
          <Grid item xs={4}>
            <Link to="/radar" className={classes.link}>Radar</Link>
          </Grid>
        </Grid>
        {/* START: Social links*/}
        <Grid item container className={classes.socialsContainer} xs={12} md={3} alignItems='center' style={{ textAlign: 'center', flexDirection: 'column' }}>{/* BEGIN: Social links */}
          <Grid item xs={12}>
              <a target="_blank" rel="noreferrer noopener" href="https://tracer-finance.medium.com/">
                  <img className="social" src="/icons/medium.png" alt="medium-logo"/>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://github.com/tracer-protocol">
                  <img className="social" src="/icons/github.png" alt="github-logo"/>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://discord.gg/kvJEwfvyrW">
                  <img className="social" src="/icons/discord.png" alt="discord-logo"/>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/tracer_finance">
                  <img className="social" src="/icons/twitter.png" alt="twitter-logo"/>
              </a>
          </Grid>
        </Grid>
        {/* END: Social links */}
      </Grid>
    </footer>
  );
}

export default CustomFooter;