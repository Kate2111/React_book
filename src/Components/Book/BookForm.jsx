import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const BookForm = ({bookArr, setBook,setVisible}) => {
    const newBookItem = {
        valueName: '',
        valueAutor: '',
        valueYear: '',
        valueDescr: ''
    };
    const [bookItem, setBookItem] = useState(newBookItem);

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
        setVisible(false);
        setBookItem({
            valueName: '',
            valueAutor: '',
            valueYear: '',
            valueDescr: ''
        })
    }

    return (
        <form className='wrapper-nav'>
            <MyInput 
                placeholder='Book titile' 
                value={bookItem.valueName} 
                onChange={(event => setBookItem({...bookItem, valueName: event.target.value}))}
            />
            <MyInput 
                placeholder='Autors' 
                value={bookItem.valueAutor} 
                onChange={(event => setBookItem({...bookItem, valueAutor: event.target.value}))}
            />
            <MyInput 
                placeholder='Publishing year' 
                value={bookItem.valueYear} 
                onChange={(event => setBookItem({...bookItem, valueYear: event.target.value}))}
            />
            <MyInput 
                placeholder='Description' 
                value={bookItem.valueDescr} 
                onChange={(event => setBookItem({...bookItem, valueDescr: event.target.value}))}
            />
            <MyButton onClick={event => addNewBook(event)}>add</MyButton>
        </form>
    );
};

export default BookForm;