import React from 'react';
import  axios from 'axios';
import { useState, useEffect } from 'react';
import BookList from './BookList';


const Book = () => {
    const [bookArr, setBook] = useState([]);
    const [valueBook, setValue] = useState('');

    useEffect(() => {
        showBook();
    }, []);

    function showBook() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA9knLZoLZlpSkvNQR6BSW6xOLzlHzkqYM')
        .then(res=>setBook(res.data.items))
        .catch(err=>console.log(err))
    }


    return (
       <>   
            <div >
                <input type="text" placeholder='add your book' value={valueBook} onChange={(event => setValue(event.target.value))} />
                <button>add</button>
            </div>
            <BookList book={bookArr}/>
       </>
    );
};

export default Book;