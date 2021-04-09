import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import FormControl from '@material-ui/core/FormControl';
import {useSelector, useDispatch} from "react-redux";
import {searchBooks, chooseBook} from "../actions";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    list: {
       width:'100%',
    },
    margin: {
        margin: theme.spacing(2),
    },
}));

const SearchBar = ()=> {
    const classes = useStyles();
    const bookList = useSelector(state => state.books);
    const dispatch = useDispatch();
    let term = bookList.term || "";

    const resultsDisplay = ()=>{
        if(bookList.books && bookList.books.length !== 0){
            return bookList.books.map(book => {
               return (
                   <ListItem onClick={()=> dispatch(chooseBook(book))} key={book.id} button>
                       <ListItemText primary = {book.bookTitle}/>
                   </ListItem>
               )
            });
        } else {
            return null;
        }
    }
    return (
        <Grid item xs={6} container className={'search-bar'}>
            <FormControl fullWidth className={classes.margin}>
                <Input
                    id="standard-adornment-amount"
                    value = {term}
                    onChange = {(e)=> dispatch(searchBooks(e.target.value))}
                />
            </FormControl>
            <div className={classes.list}>
            <List component="nav" aria-label="possible book results">
                {resultsDisplay()}
            </List>
            </div>
        </Grid>
    )
}

export default SearchBar;