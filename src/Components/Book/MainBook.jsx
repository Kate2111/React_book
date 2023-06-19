import React from 'react';
import  axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import BookFilter from './BookFilter';
import Modal from './UI/modal/Modal';
import MyButton from './UI/button/MyButton';



const Book = () => {
    function showBook() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyA9knLZoLZlpSkvNQR6BSW6xOLzlHzkqYM')
        .then(res=>setBook(res.data.items))
        .catch(err=>console.log(err))
    }
   
    
    useEffect(() => {
        showBook();
    }, []);

    const [bookArr, setBook] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

   
    const sortedBooks = useMemo(() => {
        if(filter.sort) {
            return [...bookArr].sort((item1, item2) =>  item1.volumeInfo[filter.sort].localeCompare(item2.volumeInfo[filter.sort]));
        } 
        return bookArr;
    }, [filter.sort, bookArr]);

    const sortedAndSearchedBooks = useMemo(() => {
        return sortedBooks.filter(book => book.volumeInfo.title.toLowerCase().includes(filter.query))
    }, [sortedBooks, filter.query])


    function deleteElem(index) {
        setBook(bookArr.filter(item => item.id !== index))
    }

    return (
       <>   
            <MyButton onClick={() => setModal(true)}>Add book to list</MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <BookForm  
                    bookArr={bookArr} 
                    setBook={setBook} 
                    setVisible={setModal}
                />
            </Modal>
            
            <BookFilter 
                filter={filter}
                setFilter={setFilter}
            />

            {
                sortedAndSearchedBooks.length 
                ?   <BookList 
                        bookArr={sortedAndSearchedBooks} 
                        deleteElem={deleteElem}
                    /> 
                : <h1>The list is empty</h1>
            }

           
       </>
    );
};

export default Book;