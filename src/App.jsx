import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AuthContext } from './context';
import { useState } from 'react';
import AppRouter from './Components/Book/AppRouter';
import { useEffect } from 'react';
import Navbar from './Components/Book/Navbar';


function App() {
  const [isAuth, setIsAuth] = useState(false);

useEffect(() => {
  if(localStorage.getItem('auth')){
    setIsAuth(true)
  }
}, [])

  return (
    <>
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}
    >
        <BrowserRouter>
          <Navbar/>
          <AppRouter/> 
        </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
}

export default App
