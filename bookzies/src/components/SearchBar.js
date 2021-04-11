import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import FormControl from '@material-ui/core/FormControl';
import {useSelector, useDispatch} from "react-redux";
import {searchBooks, chooseBook, resetTerm, changeTerm, resetBooks} from '../actions';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    list: {
        width: '100%',
    },
    margin: {
        margin: theme.spacing(2),
    },
    search: {
        marginBottom: theme.spacing(6),
    },
    searchIn: {
        width: '100%',
        backgroundColor: 'white'
    }
}));

const SearchBar = () => {
    const classes = useStyles();
    const bookList = useSelector(state => state.books);
    const dispatch = useDispatch();
    let term = bookList.term || "";

    useEffect(() => {
        if (bookList.term && bookList.term !== "" && !bookList.followChoice) {
            const timerId = setTimeout(() => {
                dispatch(searchBooks(bookList.term));
            }, 500);

            return () => {
                clearTimeout(timerId);
            }
        } else if (bookList.term === "" && bookList.books.length > 0) {
            dispatch(resetBooks());
        }
    })

    const resultsDisplay = () => {
        if (bookList.books && bookList.books.length !== 0) {
            return bookList.books.map((book, index) => {
                return (
                    <ListItem onClick={() => dispatch(chooseBook(book))} key={index} button>
                        <ListItemText primary={book.bookTitle}/>
                    </ListItem>
                )
            });
        } else {
            return null;
        }
    }
    return (
        <Grid item xs={6} container className={classes.search}>
            <Box borderColor="grey.500" borderRadius={16} border={1} className={classes.searchIn}>
                <Grid container>
                    <FormControl fullWidth className={classes.margin}>
                        <Input
                            id="standard-adornment-amount"
                            value={term}
                            onChange={(e) => dispatch(changeTerm(e.target.value))}
                        />
                    </FormControl>
                    <div className={classes.list}>
                        <List component="nav" aria-label="possible book results">
                            {resultsDisplay()}
                        </List>
                    </div>
                </Grid>
            </Box>
        </Grid>
    )
}

export default SearchBar;