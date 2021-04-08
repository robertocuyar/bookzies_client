import {expect} from '@jest/globals';
import {booksCall} from '../../api/books';

test("books.js is defined", ()=>{
    expect(booksCall).toBeDefined();
});
const expResults = [
    {
        _id:"606e2d1cdc52e70b6161ccf4",
        bookAuthors:"John Steakley",
        bookDesc:"This is bestselling author John Steakley's vampire classic: Vampires infest the modern world and a group of brave people-professional vampire killers-devote their lives to hunting them down.The cult classic is back for fans who like their vampire hunters hard-boiled. You don't just kill vampires for the money, you do it for the satisfaction. You do it because somebody has to. You do it no matter what it does to you. And you drink'a lot. Some jobs just suck. This one bites.But nobody does it better than Jack Crow, the leader of VAMPIRE$ Inc. His crack team of hunters takes down the blood suckers with a lethal combination of cojones and crossbows.After members of Jack's team are ambushed and slaughtered; however, the survivors need to rethink their strategy. With a new recruit from the Vatican? A priest who's not afraid to wield a stake'and a sharpshooter loaded up with silver bullets, it's payback time. The only problem is that the vampires have no intention of going down easy. They have their own hit list, and Jack Crow's name is scrawled in blood right at the top.",
        bookEdition:null,
        bookFormat:"Paperback",
        bookIsbn:"9.78045E+12",
        bookPages:"368 pages",
        bookRating:3.76,
        bookRatingCount:2694,
        bookReviewCount:176,
        bookTitle:"Vampire$",
        genres:"Horror|Paranormal|Vampires|Fiction|Fantasy|Fantasy|Urban Fantasy",
        imageUrl:"https://images.gr-assets.com/books/1309212607l/843588.jpg"
    },
    {
        _id:"606e2d15dc52e70b61618265",
        bookAuthors:"John Steakley",
        bookDesc:"Alternate cover edition can be found here. The military sci-fi classic in a striking new packageFelix is an Earth soldier, encased in special body armor designed to withstand Earth's most implacable enemy-a bioengineered, insectoid alien horde. But Felix is also equipped with internal mechanisms that enable him, and his fellow soldiers, to survive battle situations that would destroy a man's mind.This is a remarkable novel of the horror, the courage, and the aftermath of combat--and how the strength of the human spirit can be the greatest armor of all.",
        bookEdition:"Daw #605",
        bookFormat:"Mass Market Paperback",
        bookIsbn:"9.78089E+12",
        bookPages:"426 pages",
        bookRating:4.12,
        bookRatingCount:15251,
        bookReviewCount:785,
        bookTitle:"Armor",
        genres:"Science Fiction|Fiction|War|Military Fiction",
        imageUrl:"https://images.gr-assets.com/books/1337817762l/102327.jpg"
    }
]
global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(expResults)
    })
);

beforeEach(()=>{
   fetch.mockClear();
});

it("finds exchange", async ()=>{
    const results = await booksCall("Steakley");
    expect(fetch).toHaveBeenCalledTimes(1);
})