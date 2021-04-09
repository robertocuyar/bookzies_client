import React from 'react';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import Splash from './Splash';
import SearchBar from './SearchBar';
const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    }
}));
const App = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing ={3}>
                <Grid item xs={12}>
                    <NavBar/>
                </Grid>
                <Grid item container alignItems={'center'} justify={'center'} xs={12}>
                    <Splash/>
                </Grid>
                <Grid item container alignItems={'center'} justify={'center'} xs={12}>
                    <SearchBar/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App;