import { useContext } from "react";
import MyButton from "./UI/button/MyButton";
import {Link, useLocation} from 'react-router-dom';
import { AuthContext } from "../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const location = useLocation();

    const signOut = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');  
    }

    return (<>
        {
            isAuth && location.pathname === '/React_test/'
            ?
            (
                <div className="navbar_buttons">
                    <MyButton style={{marginRight: '20px'}}>
                        <Link to="/React_test/allTask">Tutorial tasks</Link>
                    </MyButton>
                    <MyButton onClick={signOut}>Sign out</MyButton>
                </div>
                
            )
            :
                <div></div>
        
        
        }
    </>    
    );
};

export default Navbar;