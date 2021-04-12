const booksURL = "https://bookzies.herokuapp.com/books?q=";

export const booksCall = async (query) => {
    try {
        const result = await fetch(booksURL + query);
        const data = result.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}