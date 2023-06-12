export default function TaskButton({handlerEvent, id, condition, value, text}) {
    return <button 
                style={{backgroundColor: 'transparent'}} 
                onClick={() => handlerEvent(id, condition, value)}
            >
                {text}
            </button>
}