export default function TempInp({temp, setTemp}) {
    return <>
        <input type="number" placeholder="Введите температуру" defaultValue={temp} onChange={event => setTemp(event.target.value)}/>
    </>
}