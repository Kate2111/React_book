import TaskButton from "./Task38_TaskButton"

export default function TaskItem({item, index, textStyle, changeTask, deleteTask}) {
    return <li 
        style={{display: 'flex', justifyContent: 'space-between'}}
        key={item.id}>
            {
                item.isEdit
                ? <div>{index+1}. <span style={textStyle}>{item.task}</span></div>
                
                
                : <input 
                    value={item.task} 
                    onChange={event=> changeTask(item.id, 'task', event.target.value)} 
                />
            }
        <div>
            <TaskButton
                handlerEvent={changeTask}
                id={item.id}
                condition={'isDone'}
                value={!item.isDone}
                text={'done'}
            />
            <TaskButton
                handlerEvent={changeTask}
                id={item.id}
                condition={'isEdit'}
                value={!item.isEdit}
                text={item.isEdit ? 'edit' : 'save'}
            />
            <TaskButton
                handlerEvent={deleteTask}
                id={item.id}
                text={'del'}
            />
            {/* <button style={{backgroundColor: 'transparent'}} onClick={() => changeTask(item.id, 'isDone', !item.isDone)}>done</button>
            <button style={{backgroundColor: 'transparent'}} onClick={() => changeTask(item.id, 'isEdit', !item.isEdit)}>{item.isEdit ? 'edit' : 'save'}</button>
            <button style={{backgroundColor: 'transparent'}} onClick={() => deleteTask(item.id)}>del</button> */}
        </div>
    </li>
}