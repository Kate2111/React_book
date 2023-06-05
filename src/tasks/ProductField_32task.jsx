
export default function showEmployee({id, text, type, isEdit, editElem}) {
    return isEdit 
        ? <input value={text} onChange={event => editElem(event, type, id)}/>
        : <span>{text}</span>
}