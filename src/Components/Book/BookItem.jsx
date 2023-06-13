import React from 'react';

const BookItem = ({idBook, titleBook, descrBook, autorBook, yearBook}) => {
    return (
        <div className='card' key={idBook}>
            <p><span>Название:</span> {titleBook} </p>
            <p><span>Автор:</span> {autorBook}</p>
            <p><span>Год выпуска:</span> {yearBook}</p>
            <p className='card__descr'><span>Описание:</span> {descrBook}</p>
        </div> 
    );
};

export default BookItem;

 {/* <div className='card' key={idBook}>
            <p>Название:{titleBook} </p>
            <p className='card__descr'>Описание:{descrBook}</p>
            <p>Автор: {autorBook}</p>
            <p>Год выпуска: {yearBook}</p>
        </div> */}