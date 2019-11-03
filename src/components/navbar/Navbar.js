import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import About from '../pages/About';

const useStyles = makeStyles({
    hr: {
        width: '0.5px',
        height: '25px',
        backgroundColor: '#fff',
        margin: '0px 10px',
    },
    a: {
        color: '#ffffff',
        cursor: 'pointer',
        textDecoration: 'none',
    },
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Router>
                <AppBar position="static" width='100%'>
                    <Toolbar>
                        <Typography variant="h6" >
                            <Link to='/' className={classes.a}> Todo List Application </Link>
                        </Typography>
                        <Divider orientation="vertical" className={classes.hr} />
                        <Link to='../pages/About.js' className={classes.a}>
                            About
                        </Link>
                    </Toolbar>
                </AppBar>
                <Route path="/about.js" component={About}>
                    <About />
                </Route>
            </Router>
        </Fragment>
    );
}

export default Navbar;