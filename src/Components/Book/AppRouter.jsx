import Alltask from '../../pages/Alltask';
import MainBook from '../../pages/MainBook';
import BookDescription from '..//Book/BookDescription';
import Login from '../../pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth);
    return (
          isAuth
          ? 
          <Routes>
            <Route exact path="/React_test" element={<MainBook/>} />
            <Route exact path="/React_test/allTask" element={<Alltask />} />
            <Route exact path="/React_test/:id" element={<BookDescription/>}/>
          </Routes> 
          : 
          <Routes>
            <Route exact path="/React_test" element={<Login/>}/>
          </Routes> 
    );
};

export default AppRouter;