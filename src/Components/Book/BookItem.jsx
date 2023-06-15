import React from 'react';
import MyButton from './UI/button/MyButton';

const BookItem = ({idBook, titleBook, descrBook, autorBook, yearBook, deleteElem}) => {
    
    return (
        <div className='card' key={idBook}>
            <span>
                <p><span>Название:</span> {titleBook} </p>
                <p><span>Автор:</span> {autorBook}</p>
                <p><span>Год выпуска:</span> {yearBook}</p>
                <p className='card__descr'><span>Описание:</span> {descrBook}</p>
            </span>
            <span className='card__buttons'>
                <MyButton onClick={() => deleteElem(idBook)}>delete</MyButton>
                <MyButton>edit</MyButton>
            </span>
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