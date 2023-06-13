import React from 'react';
import  axios from 'axios';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import BookList from './BookList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';



const Book = () => {
    const newBookItem = {
        valueName: '',
        valueAutor: '',
        valueYear: '',
        valueDescr: ''
    }
    const [bookArr, setBook] = useState([]);
    const [bookItem, setBookItem] = useState(newBookItem)
    /* const [valueName, setValueName] = useState('');
    const [valueAutor, setValueAutor] = useState('');
    const [valueYear, setValueYear] = useState('');
    const [valueDescr, setValueDescr] = useState(''); */

    useEffect(() => {
        showBook();
    }, []);

    function showBook() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA9knLZoLZlpSkvNQR6BSW6xOLzlHzkqYM')
        .then(res=>setBook(res.data.items))
        .catch(err=>console.log(err))
    }

    function addNewBook(event) {
        event.preventDefault();
        const newBook = {
            id: nanoid(5),
            volumeInfo: {
                title: bookItem.valueName,
                authors: bookItem.valueAutor,
                publishedDate: bookItem.valueYear,
                description: bookItem.valueDescr
            }
        }
        setBook([...bookArr, newBook]);
        setBookItem({
            valueName: '',
            valueAutor: '',
            valueYear: '',
            valueDescr: ''
        })
    }


    return (
       <>   
            <form className='wrapper-nav'>
                <MyInput placeholder='Название книги' value={bookItem.valueName} onChange={(event => setBookItem({...bookItem, valueName: event.target.value}))}/>
                <MyInput placeholder='Авторы' value={bookItem.valueAutor} onChange={(event => setBookItem({...bookItem, valueAutor: event.target.value}))}/>
                <MyInput placeholder='Год выпуска' value={bookItem.valueYear} onChange={(event => setBookItem({...bookItem, valueYear: event.target.value}))}/>
                <MyInput placeholder='Описание' value={bookItem.valueDescr} onChange={(event => setBookItem({...bookItem, valueDescr: event.target.value}))}/>
                <MyButton onClick={event => addNewBook(event)}>add</MyButton>
            </form>
            <BookList book={bookArr}/>
       </>
    );
};

export default Book;