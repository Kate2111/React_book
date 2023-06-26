import MyInput from '../Components/Book/UI/input/MyInput';
import MyButton from '../Components/Book/UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (<>
        <div style={{display:'flex', justifyContent:'center'}}>
            <form className='wrapper-nav' onSubmit={login}>
                <h2>Page for autorization</h2>
                <MyInput placeholder='Enter login'/>
                <MyInput placeholder='Enter password'/>
                <MyButton>sign up</MyButton>
            </form>
        </div>
    </>  
    );
};

export default Login;