
import  axios from 'axios';
import BookServise from '../API/BookServise';
import { useState, useEffect} from 'react';
import BookList from '../Components/Book/BookList';
import BookForm from '../Components/Book/BookForm';
import BookFilter from '../Components/Book/BookFilter';
import Modal from '../Components/Book/UI/modal/Modal';
import MyButton from '../Components/Book/UI/button/MyButton';
import {useSearchedBooks} from '../hooks/useBook'


const Book = () => {
    function showApiBook() {
        BookServise.getAll()
        .then(res=>setBook(res))
        .catch(err=>console.log(err))
    }
 
    /* async function showApiBook() {
        const books = await BookServise.getAll();
        setBook(books);
       
    } */

    useEffect(() => {
        showApiBook();
    }, []);

    const [bookArr, setBook] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedBooks = useSearchedBooks({ bookArr, sort: filter.sort, query: filter.query })
   
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