import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Alltask from './pages/Alltask';
import MainBook from './pages/MainBook';
import MyButton from './Components/Book/UI/button/MyButton';
import BookDescription from './Components/Book/BookDescription';


function App() {
  return (
    <>
      <BrowserRouter>
        <MyButton style={{marginRight: '20px'}}>
          <Link to="/React_test/allTask">Задачи по учебнику</Link>
        </MyButton>
        

        <Routes>
          <Route exact path="/React_test" element={<MainBook />} />
          <Route exact path="/React_test/allTask" element={<Alltask />} />
          <Route exact path="/React_test/:id" element={<BookDescription/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
