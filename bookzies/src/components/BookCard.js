import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {nameChange} from "../util/nameChange";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
});

const BookCard = ({choice}) =>{
    const classes = useStyles();
    const authors = nameChange(choice.bookAuthors, '|');
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={choice.imageUrl}
                    title={choice.bookTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {choice.bookTitle}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {authors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {choice.bookDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BookCard;