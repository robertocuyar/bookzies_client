import React from 'react';
import {makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
    },
}));

const NavBar = ()=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Avatar src={""} alt={"Book"}/>
                    <Typography variant="h2" className={classes.title}>
                        Bookzies
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;

