import { useParams} from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const BookDescription = () => {
    const params = useParams();
    return (<>
        <div>
            Это страница отдельного поста
           
        </div>
        <MyButton  onClick={() => console.log(params)}>go back</MyButton>
    </>
        
    );
};

export default BookDescription;