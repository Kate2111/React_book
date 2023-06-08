import { useState } from "react"

export default function Todo_input({addTaskToList, addTaskToListEnter}) {
    const [inputValue, setValue] = useState('');
    return <>
        <input 
            style={{width: '82%', marginBottom: '20px'}} 
            placeholder='Введите задачу'
            value={inputValue}
            onChange={event=>setValue(event.target.value)}
            onKeyDown={(event => addTaskToListEnter(event, inputValue, setValue))}
        />
        <button 
            style={{marginLeft: '10px'}} 
            onClick={() => addTaskToList(inputValue, setValue)}
        >
            add
        </button>
    </>
   
}