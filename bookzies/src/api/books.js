const booksURL = "https://bookzies.herokuapp.com/books?q=";

export const booksCall = async (query) => {
    try{
        const result = await fetch(booksURL + query);
        const data = await result.json();
        return data;
    } catch (e) {
        return null;
    }
}