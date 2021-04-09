import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from "./BookCard";
import {useSelector} from "react-redux";

const Splash = ()=>{
    const book = useSelector(state => state.books);

    const splashDisplay = ()=>{
        if (book.chosen){
            return (
                <BookCard choice={book.chosen}/>
            )
        } else {
            return (
                <div>
                    Search for a book in our database!
                </div>
            )
        }
    }
    return (
        <Grid item>
            {splashDisplay()}
        </Grid>
    )
}

export default Splash;