
import axios from "axios";

export default {
    
    getBooks: function() {
        return axios.get("/api/books");
    },
    
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    
    getSearchedBooks: function(title) {
        console.log("TITLE:", title);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=intitle:" + title.title + "&key=AIzaSyAzh3hgpTEaEpBI9WMYYqbaXI1bEb0rn4o");
    }
};