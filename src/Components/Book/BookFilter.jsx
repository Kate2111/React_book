import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const BookFilter = ({filter, setFilter}) => {
    const arrForSort = [
        {   value: 'title', name: 'Title' },
        {   value: 'description', name: 'Description' },
        {   value: 'publishedDate', name: 'Year' },
    ]

    return <>
        <div className='filter-wrapper'>
            <MyInput className='filter-input'
                placeholder='Book search by title . . .' 
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                defaultValue='Sort'
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={arrForSort}
            />
        </div>
    </>
};

export default BookFilter;