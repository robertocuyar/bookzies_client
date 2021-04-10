import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from "./BookCard";
import {useSelector} from "react-redux";
import Typography from '@material-ui/core/Typography';

const Splash = () => {
    const book = useSelector(state => state.books);

    const splashDisplay = () => {
        if (book.chosen) {
            return (
                <BookCard choice={book.chosen}/>
            )
        } else {
            return (
                <Typography variant={'h3'}>
                    Search for a book in our database!
                </Typography>
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