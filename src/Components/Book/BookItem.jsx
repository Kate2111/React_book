import React from 'react';

const BookItem = ({idBook, srcImageBook, titleBook}) => {
    return (
        <div className='card' key={idBook}>
            <img className='card__image' src={srcImageBook} alt={titleBook} />
            <a className='card__btn' href='#'>more</a>
        </div>
    );
};

export default BookItem;