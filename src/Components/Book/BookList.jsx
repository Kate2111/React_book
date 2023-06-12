import React from 'react';
import BookItem from './BookItem';

const BookList = ({book}) => {

    const bookItem = [...book].map(item=>{
        const srcImageBook = item.volumeInfo.imageLinks.thumbnail;
        const titleBook = item.volumeInfo.title;
        const id = item.id;
        return  <BookItem
                    idBook={id}
                    srcImageBook={srcImageBook}
                    titleBook={titleBook}
                />
    })

    return (
        <div className='wrapper-book'>
                {bookItem}
        </div>
    );
};

export default BookList;