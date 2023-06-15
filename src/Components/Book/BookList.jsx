import React from 'react';
import BookItem from './BookItem';

const BookList = ({bookArr, deleteElem}) => {

    const bookItem = [...bookArr].map(item=>{
        //const srcImageBook = item.volumeInfo.imageLinks.thumbnail;
        const id = item.id;
        const titleBook = item.volumeInfo.title;
        const descrBook = item.volumeInfo.description;
        const autorBook = item.volumeInfo.authors;
        const yearBook = item.volumeInfo.publishedDate;
        
        return  <BookItem
                    key={id}
                    idBook={id}
                    titleBook={titleBook}
                    descrBook={descrBook}
                    autorBook={autorBook}
                    yearBook={yearBook}
                    deleteElem={deleteElem}
                />
    })

    return (
        <div className='wrapper-book'>
                {bookItem}
        </div>
    );
};

export default BookList;