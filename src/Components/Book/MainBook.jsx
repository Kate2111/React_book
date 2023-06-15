import React from 'react';
import  axios from 'axios';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import BookList from './BookList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import BookForm from './BookForm';
import MySelect from './UI/select/MySelect';



const Book = () => {
 
    const [bookArr, setBook] = useState([]);
    const [selectSort, setSelectSort] = useState('')
    const arrForSort = [
        {   value: 'title', name: 'title' },
        {   value: 'description', name: 'description' },
        {   value: 'publishedDate', name: 'year' },
    ]

    useEffect(() => {
        showBook();
    }, []);

    function showBook() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA9knLZoLZlpSkvNQR6BSW6xOLzlHzkqYM')
        .then(res=>setBook(res.data.items))
        .catch(err=>console.log(err))
    }

    function deleteElem(index) {
        setBook(bookArr.filter(item => item.id !== index))
    }

    const sortElem = (sort) => {
        setSelectSort(sort);
       
        setBook([...bookArr].sort((item1, item2) => {
            return item1.volumeInfo[sort].localeCompare(item2.volumeInfo[sort]);   
        }));
    }

    return (
       <>   
            <BookForm 
                bookArr={bookArr} 
                setBook={setBook}
            />
           
            {
                bookArr.length
                ?   (
                        <>
                            <MySelect
                            defaultValue='Sort'
                            value={selectSort}
                            onChange={sortElem}
                            options={arrForSort}
                            />
                            <BookList 
                                bookArr={bookArr}
                                deleteElem={deleteElem}
                            />
                        </>
                    )
                : <h1>The list is empty</h1>
            }
            
       </>
    );
};

export default Book;