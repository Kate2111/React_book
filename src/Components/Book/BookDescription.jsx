import { useParams} from 'react-router-dom';
import MyButton from './UI/button/MyButton';
import { useEffect, useState } from 'react';
import BookServise from '../../API/BookServise';
import {useNavigate} from 'react-router-dom';

const BookDescription = () => {
    const navigate = useNavigate();
    const params = useParams();
    const index = params.id;
    const [book, setBook] = useState([]);
    function fetchBookID() {
        BookServise.getAll()
        .then(res=>setBook(res))
        .catch(err=>console.log(err));
    }
    useEffect(() => {
        fetchBookID();
    }, [])

   

    return (<>
            <MyButton  onClick={() =>navigate(`/React_test/`)}>go back</MyButton>
            <div className='wrapper-book'>
                {
                    [...book].map(item => {
                        
                        if(item.id === index) {
                            const id = item.id;
                            const link = `https://books.google.ge/books/about/React_js_Essentials.html?hl=&id=${id}&redir_esc=y`
                            return  <div key={id}>
                                        <h1>{item.volumeInfo.title}</h1> 
                                        <h2>{item.volumeInfo.subtitle}</h2>
                                        <p>For more information click on the picture</p>
                                        <a href={link}>
                                            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="imageBook" />  
                                        </a>
                                          
                                    </div>
            
                        }
                    })
                }
            </div>
  
    </>
        
    );
};

export default BookDescription;