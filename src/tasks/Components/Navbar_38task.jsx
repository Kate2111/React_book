import { useState } from "react"

export default function Todo_input({addTaskToList}) {
    const [inputValue, setValue] = useState('');
    return <>
        <input 
            style={{width: '82%', marginBottom: '20px'}} 
            placeholder='Введите задачу'
            value={inputValue}
            onChange={event=>setValue(event.target.value)}
        />
        <button 
            style={{marginLeft: '10px'}} 
            onClick={() => addTaskToList(inputValue, setValue)}
        >
            add
        </button>
    </>
   
}