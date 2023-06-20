import React from 'react';
import BookItem from './BookItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const BookList = ({bookArr, deleteElem}) => {

    return (
        <div className='wrapper-book'>
            <TransitionGroup>
                {
                    [...bookArr].map(item=>{
                        const id = item.id;
                        const titleBook = item.volumeInfo.title;
                        const descrBook = item.volumeInfo.description;
                        const autorBook = item.volumeInfo.authors;
                        const yearBook = item.volumeInfo.publishedDate;
                        
                        return  <CSSTransition
                                    key={id}
                                    timeout={500}
                                    classNames="item"
                                >
                                    <BookItem
                                        idBook={id}
                                        titleBook={titleBook}
                                        descrBook={descrBook}
                                        autorBook={autorBook}
                                        yearBook={yearBook}
                                        deleteElem={deleteElem}
                                    />
                                </CSSTransition>
                    })
                }
            </TransitionGroup>
        </div>
    );
};

export default BookList;