import React, { useState } from 'react';
import { Hidden, Container, AppBar, Toolbar, Drawer, Box, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby";

const Logo = props => {
  const classes = useStyles();
  return (
    <Link to="/">
        <img 
            src="/tracer-logo.png"
            className={clsx(classes.root, props.className)}
            alt="tracer-logo"
        />
    </Link>
  );
};

const AppLogo = withStyles({
    root: {
    }}
  )(Logo);


/**
 * BEGIN: AppBarMenu Component
 */

const useAppBarMenuStyles = makeStyles(theme => ({
    root: {
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%!important'
        },
        alignItems: 'center',
        height: '100%',
        width: '70%',
        margin: 'auto',
    },

    menuItem: {
        textTransform: 'initial',
        borderRadius: 0,
        padding: '6px 0',
        textAlign: 'center',
        fontSize: '0.875rem',
        margin: '0 2rem',
        '&:hover': {
            opacity: 0.9,
            textDecoration: 'underline'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            width: '100%',
            color: '#0000bd',
            backgroundColor: '#f2f2fc',
        }
    },

    menuItemButton: {
        padding: `0 10px`,
        borderRadius: 0,
        borderColor: '#000'
    }
}));

const AppBarMenu = props => {
    const classes = useAppBarMenuStyles();
    return (
        <Box
            display='flex'
            className={classes.root}
        >
            <Link to='/whitepapers' className={classes.menuItem}>Whitepapers</Link>
            <Link to='/radar' className={classes.menuItem}>Radar</Link>
        </Box>
    );
};


/**
 * BEGIN: CustomAppBar Component.
 */

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: '#0000bd',
        color: '#fff',
    },

    appLogo: {
        height: 34,
        maxWidth: '125px',
    },

    icon: {
        marginLeft: 'auto',
        marginRight: 0,
        color: '#fff'
    },
    close: {
        textTransform: 'initial',
        borderRadius: 0,
        padding: '6px 0',
        textAlign: 'center',
        fontSize: '0.875rem',
        margin: '0 1rem',
        '&:hover': {
            opacity: 0.9,
            textDecoration: 'underline'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            width: '100%',
            color: '#0000bd',
            backgroundColor: '#f2f2fc',
        }
    },
    drawerPaper: {
        [theme.breakpoints.only('sm')]: {
            width: '40%'
        },
        [theme.breakpoints.only('xs')]: {
            width: '70%'
        }
    },
    mobile: {
        alignItems: 'center',
    },
    toolbar: {
        display: 'flex'
    }
}));

const CustomAppBar = props => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <AppBar className={classes.appBar} position='static' elevation={2}>
            <Container maxWidth='lg'>
                <Toolbar className={classes.toolbar} disableGutters>
                    <AppLogo className={classes.appLogo} />
                    <Hidden smDown>
                        <AppBarMenu  />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            component='span'
                            edge='end'
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            className={classes.icon}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </Container>
            <Hidden mdUp>
                <Drawer
                    open={drawerOpen}
                    anchor={'right'}
                    onClose={() => setDrawerOpen(false)}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <AppBarMenu />
                    <div aria-hidden="true" onClick={(e) => { e.preventDefault(); setDrawerOpen(false)}} className={classes.close}>Close</div>
                </Drawer>
            </Hidden>
        </AppBar>
    );
};


export default CustomAppBar;
