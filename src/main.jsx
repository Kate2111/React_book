import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


//Функция useState параметром принимает начальное значение стейта, а своим результатом возвращает специальный массив из двух элементов. В первом элементе массива будет хранится текущее значение стейта, а во втором - функция для изменения стейта.