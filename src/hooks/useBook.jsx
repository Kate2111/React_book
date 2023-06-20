import { useMemo } from 'react';

export const useSortedBooks = ({bookArr, sort}) => {
    const sortedBooks = useMemo(() => {
        if(sort) {
            return [...bookArr].sort((item1, item2) =>  item1.volumeInfo[sort].localeCompare(item2.volumeInfo[sort]));
        } 
        return bookArr;
    }, [sort, bookArr]);

    return sortedBooks;
}

export const useSearchedBooks = ({bookArr, sort, query}) => {
    const sortedBooks = useSortedBooks({bookArr, sort})

    const sortedAndSearchedBooks = useMemo(() => {
        return sortedBooks.filter(book => book.volumeInfo.title.toLowerCase().includes(query))
    }, [sortedBooks, query]);

    return sortedAndSearchedBooks;
}




