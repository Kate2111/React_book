export default function Verdict({temp}) {
    return <>
        <p>{temp <= 0 && 'Лед'}</p>
        <p>{temp>0 && temp<100 && 'Жидкость'}</p>
        <p>{temp > 100 && 'Пар'}</p>
    </>
}