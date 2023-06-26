import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';

const BookItem = ({idBook, titleBook, descrBook, autorBook, yearBook, deleteElem}) => {
    const navigate = useNavigate();
  
    return (
        <div className='card' key={idBook}>
            <span>
                <p><span>Title:</span> {titleBook} </p>
                <p><span>Autor:</span> {autorBook}</p>
                <p><span>Year:</span> {yearBook}</p>
                <p className='card__descr'><span>Description:</span> {descrBook}</p>
            </span>
            <span className='card__buttons'>
                <MyButton onClick={() => deleteElem(idBook)}>delete</MyButton>
                <MyButton onClick={() => navigate(`/React_test/${idBook}`)}>open</MyButton>
                
            </span>
        </div> 
    );
};

export default BookItem;
