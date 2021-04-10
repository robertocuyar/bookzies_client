import React from 'react';
import {makeStyles} from '@material-ui/core';
import logoImg from '../img/Bookzies.png'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6)
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
    },
}));

const Logo = ()=>{
    const classes = useStyles();

    return (
     <Grid container justify={'center'} alignItems={'center'} className={classes.root}>
         <Grid item>
             <img src={logoImg} alt="Bookzies"/>
         </Grid>
     </Grid>

    );
};

export default Logo;

