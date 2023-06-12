import { nanoid } from 'nanoid' 
import { useId, useState } from 'react';
import uuid from 'react-uuid';

import React, { Component } from 'react';

import Employee from './Task/Task30_Employee';
import Employee_1 from './Task/Task31_Employee';
import Product from './Task/Task32_Product';
import Product_1 from './Task/Task33_Product';
import TempInp from './Task/Task34_TempInp';
import Verdict from './Task/Task34_Verdict';
import TempInp_1 from './Task/Task35_TempInp';
import Navbar from './Task/Task38_Navbar';
import TaskItem from './Task/Task38_TaskItem'


export function Task1() {
    function showNum(number) {
        alert(number)
    }
    return <>
        <div className="border">
            <h5>1. Сделайте так, чтобы по клику на первую кнопку алертом выводилось число 1, по клику на вторую кнопку - число 2, а по клику на третью - число 3.</h5>
            <button onClick={() => showNum(1)}>act1</button>
            <button onClick={() => showNum(2)}>act2</button>
            <button onClick={() => showNum(3)}>act3</button>
        </div>
    </>
}

export function Task2() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const res = arr.map(function(item, index) {
		return <li key={index}>{item}</li>;
	});
    return <>
        <div className="border">
            <h5>2. С помощью метода map сформируйте следующий код</h5>
            <ul>
            {res}
            </ul>
        </div>
    </>
}

export const Task3 = () => {
    const users = [
        {id: 1,name: 'user1', surn: 'surn1', age: 30},
        {id: 2,name: 'user2', surn: 'surn2', age: 31},
        {id: 3,name: 'user3', surn: 'surn3', age: 32},
      ];
    
    const userShow = users.map(function(elem) {
    return <li key={elem.id}>Имя: {elem.name}, Фамилия: {elem.surn}, Возраст: {elem.age}</li>
    })

    return <>
        <div className="border">
            <h5>3. Выведите элементы этого массива в виде списка ul.</h5>
            <ul>
            {userShow}
            </ul>
        </div>
    </>
}

export const Task4 = () => {
    const usersTable = [
        {id: 1, name: 'user1', surn: 'surn1', age: 30},
        {id: 2, name: 'user2', surn: 'surn2', age: 31},
        {id: 3, name: 'user3', surn: 'surn3', age: 32},
      ];
    
      const showTable = usersTable.map(function(elem) {
        return <tr key={elem.id}>
                  <td>{elem.name}</td>
                  <td>{elem.surn}</td>
                  <td>{elem.age}</td>
                </tr>
      
      })

      return <>
        <div className="border">
            <h5>4. Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.</h5>
            <table>
            <thead>
                <tr>
                <td>Имя</td>
                <td>Фамилия</td>
                <td>возраст</td>
                </tr>
            </thead>
            <tbody>
                {showTable}
            </tbody>
            </table>
        </div>
      </>
}

export const Task5 = () => {
           /// Nano ID
    const arrNanoid = ['name1', 'name2', 'name3']
    const model = []
    for(let i = 0; i < arrNanoid.length; i++) {
        model.push({id: nanoid(5), name:arrNanoid[i]}); // Функция также принимает необязательный аргумент, задающий длину ID:
    }
    const modelString = JSON.stringify(model);
            /// uuuid
    const arrUuid = ['one', 'two'];
    const lineItem = [];
    for(let i = 0; i < arrUuid.length; i++) {
        lineItem.push({id: uuid(), name:arrUuid[i]}); 
    }
    const lineString = JSON.stringify(lineItem);

    return <>
        <div className="border">
            <h5>5. Установите и изучите обе библиотеки. Сгенерируйте с их помощью случайные строки.</h5>
            <p>Nano Id - генератор уникальных ID для JavaScript</p>
            <div>
            <pre>
                {modelString}
            </pre>
            </div>
            <br />
            <p>Uuid</p>
            <div>
            <pre>
                {lineString}
            </pre>
            </div>
            <br />
            <p>useId — это React Hook для генерации уникальных идентификаторов, которые могут быть переданы атрибутам доступности.</p>
        </div>
    </>
}

export class Task6 extends Component {
    constructor () {
        super();
        
        // Код внутри конструктора необходимо перенести внутрь свойства класса
        const id = () => nanoid(5);

        const prods = [
            {id: id(), name: 'product1', cost: 100},
            {id: id(), name: 'product2', cost: 200},
            {id: id(), name: 'product3', cost: 300},
        ];
        const prodsString = JSON.stringify(prods);

        // Присваиваем переменные к свойствам класса
        this.id = id;
        this.prods = prods;
        this.prodsString = prodsString;
    }

    render() {
        return (
            <>
                <div className="border">
                    <h5>6. Сделайте массив объектов с юзерами, сгенерировав им id с помощью нашей функции function id.</h5>
                    <div>
                        <pre>
                            {this.prodsString}
                        </pre>
                    </div>
                </div>
            </>
        );
    }
}

export const Task7 = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    
    function saveUser() {
        const inputName = document.querySelector('.nameUser')
        const inputSurname = document.querySelector('.surnameUser')
      
        setName(inputName.value);
        setSurname(inputSurname.value) 
    }
    
    return <>
        <div className="border">
            <h5>7. Даны стейты с именем и фамилией юзера. Выведите их в верстке. Сделайте кнопки для изменения этих стейтов.</h5>
            <div>
                <input className='nameUser' type="text" placeholder='Введите имя' />
                <input className='surnameUser' type="text" placeholder='Введите фамилию' />
                <button onClick={saveUser}>сохранить</button>
                <div>{surname} {name}</div>
            </div>
        </div>
    </>
}

export const Task8 = () => {
    const [isInputDisabled, setIsInputDisabled] = useState(true)

    
    return <>
        <div className="border">
            <h5>8. Сделайте кнопку, нажатие на которую будет банить пользователя и кнопку, нажатие на которую будет разбанивать пользователя. Сделайте так, чтобы из двух кнопок всегда была видна только соответствующая. То есть, если пользователь забанен, то видна кнопка для разбанивания, а если не забанен - для забанивания.</h5>
            <div>
                <input disabled={isInputDisabled} type="text" placeholder='user' />
                <button onClick={() => {setIsInputDisabled(!isInputDisabled)}}>{isInputDisabled ? 'unlock' : 'block'}</button>
             
            </div>
        </div>
    </>
}

export const Task9 = () => {
    const [count, setCount] = useState(0)
    
    return <>
        <div className="border">
            <h5>9. Пусть в стейте хранится число. Выведите это число в абзаце. Сделайте две кнопки. Пусть первая кнопка увеличивает возраст на единицу, а вторая - уменьшает его.</h5>
            <div>
                <div style={{width: '150px', textAlign: 'center', backgroundColor: '#646cff'}}>{count}</div>
                <div style={{ width: '150px', display:'flex', justifyContent:'space-between'}}>
                    <button onClick={() => {setCount(count + 1)}}>+1</button>
                    <button onClick={() => {setCount(count - 1)}}>-1</button>
                </div>
                
            </div>
        </div>
    </>
}

export const Task10 = () => {
   const [valueName, setValueName] = useState('');
   const [valueSurn, setValueSurn] = useState('')
    
    return <>
        <div className="border">
            <h5>10. Сделайте два инпута. Пусть текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац.</h5>
            <div>
                <input 
                    onChange={event => setValueName(event.target.value)} 
                    type="text" 
                    value={valueName} 
                    placeholder='Введите имя' 
                />
                <p>{valueName}</p>

                <input 
                    onChange={event => setValueSurn(event.target.value)} 
                    type="text" 
                    value={valueSurn} 
                    placeholder='Введите фамилию' 
                />
                <p>{valueSurn.length}</p>
            </div>
        </div>
    </>
}

export const Task11 = () => {
    const [age, setAge] = useState(0)
    function showYear(age) {
        return new Date().getFullYear() - age
    }
    
    return <>
        <div className="border">
            <h5>11. Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста, в абзаце автоматически появлялся год рождения пользователя.</h5>
            <div>
                <input  
                    placeholder='Введите ваш возраст'
                    onChange={event => setAge(event.target.value)}
                />
                <p>{age===0 || age==='' ? '' : `Год вашего рождения ${showYear(age)}`}</p>
            </div>
        </div>
    </>
}

export const Task12 = () => {
    const [temp, setTemp] = useState(0)
    function showTemp(num) {
        return Math.floor((num - 32) / 1.8)
    }
    
    return <>
        <div className="border">
            <h5>12. Дан инпут и абзац. В инпут вводятся градусы Фаренгейта. Сделайте так, чтобы при наборе текста, в абзаце автоматически выполнялась конвертация в градусы Цельсия.</h5>
            <div>
                <input 
                    placeholder='Введите температуру' 
                    onChange={event => setTemp(event.target.value)}
                />
                <p>Температура в градусах Цельсия {showTemp(temp)}</p>
            </div>
        </div>
    </>
}

export const Task13 = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [num4, setNum4] = useState(0)
    const [num5, setNum5] = useState(0)

    function findSum(arr) {
        let sum = arr.reduce((acc, elem) => acc + elem)/arr.length
        return Math.floor(sum)
    }
    
    return <>
        <div className="border">
            <h5>13. Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел.</h5>
            <div>
                <input 
                    onChange={event => setNum1(+event.target.value)} placeholder='Введите число' 
                />
                <input 
                    onChange={event => setNum2(+event.target.value)} placeholder='Введите число' 
                />
                <input 
                    onChange={event => setNum3(+event.target.value)} placeholder='Введите число' 
                />
                <input 
                    onChange={event => setNum4(+event.target.value)} placeholder='Введите число' 
                />
                <input 
                    onChange={event => setNum5(+event.target.value)} placeholder='Введите число' 
                />
                <p>Средняя арифметическая сумма {findSum([num1, num2, num3, num4, num5])}</p>
            </div>
        </div>
    </>
}

export const Task14 = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState(0)
    
    return <>
        <div className="border">
            <h5>14. Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. Результат выводите в абзац.</h5>
            <div>
                <input 
                    placeholder='Введите число'
                    onChange={event => setNum1(+event.target.value)} 
                />
                <input 
                    placeholder='Введите число'
                    onChange={event => setNum2(+event.target.value)} 
                />
                <button onClick={() => setRes(num1 + num2)}>сумма</button>
                <button onClick={() => setRes(num1 * num2)}>произведение</button>
                <p>Результат {res}</p>
            </div>
        </div>
    </>
}

export const Task15 = () => {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [result, setResult] = useState('');
  
    const handleCalculate = () => {
        const newDate1 = new Date(date1.split('-').join('.')) 
        const newDate2 = new Date(date2.split('-').join('.'));
        const diffInMilliseconds = Math.abs(newDate2 - newDate1);
        const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
        setResult(diffInDays);
    };
  
    return (
        <>
            <h5>Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.</h5>
            <div>
            <input
                type="text"
                placeholder="yyyy-mm-dd"
                value={date1}
                onChange={(event) => setDate1(event.target.value)}
            />
            <input
                type="text"
                placeholder="yyyy-mm-dd"
                value={date2}
                onChange={(event) => setDate2(event.target.value)}
            />
            <button onClick={handleCalculate}>Рассчитать</button>
            </div>
            <p>Результат: {result} дней</p>
        </>

    );
}

export const Task16 = () => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(0)

    function getSum() {
        const sum = number.split('').map(Number).reduce((acc, elem) => acc + elem);
        return setResult(sum);
    }
    
    return <>
        <div className="border">
            <h5>16. Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа.</h5>
            <div>
                <input 
                    placeholder='Введите число'
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    onBlur={() => getSum()}
                />
                <p>{result}</p>
            </div>
        </div>
    </>
}

export const Task17 = () => {
    const [text, setText] = useState('');
    
    function getSum() {
        const sum = text.split('').map(Number).reduce((acc, elem) => acc + elem, 0);
        return sum;
    }
    return <>
        <div className="border">
            <h5>17. Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по мере ввода в абзац выводилась сумма введенных чисел.</h5>
            <div>
                <textarea onChange={event => setText(event.target.value)} />
                <p>{getSum()}</p>
            </div>
        </div>
    </>
}

export const Task18 = () => {
    const [condition, setChecked] = useState(false);
    const [text, setText] = useState('');
    function showHello() {
        condition ? setText('hello') : setText('bye')
    }
    
    return <>
        <div className="border">
            <h5>18. Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания.</h5>
            <div>
                <input 
                    type="checkbox" 
                    checked={condition}  
                    onChange={() => setChecked(!condition)}
                />
                <button onClick={showHello}>click</button>
                <p>{text}</p>
            </div>
        </div>
    </>
}

export const Task19 = () => {
    const [age, setAge] = useState(false)
    let message;
    if(age) {
        message = <div>
            <h3>Ура, вам уже есть 18</h3>
            <p>
                здесь расположен контент только для взрослых
            </p>
        </div>
    } else {
        message = <div>
            <p>
                увы, вам еще нет 18 лет
            </p>
        </div>
    }

    return <>
        <div className="border">
            <h5>19. Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет.</h5>
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={age}
                        onChange={() => setAge(!age)}
                    />
                    Вам есть 18 лет? 
                </label>
                <div>{message}</div>
            </div>
        </div>
    </>
}

export const Task20 = () => {
    const [checked, setChecked] = useState(false)
  
    return <>
        <div className="border">
            <h5>20. Дан чекбокс и абзац. Если чекбокс отмечен, пусть абзац будет видимым на экране, а если не отмечен - спрячьте его.</h5>
            <div>
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </div>
            <p>{checked ? 'text' : ''}</p>
        </div>
    </>
} 

export const Task21 = () => {
    const [value, setValue] = useState('')
  
    return <>
        <div className="border">
            <h5>21. Сделайте выпадающий список городов. Сделайте также абзац, в который будет выводиться выбор пользователя.</h5>
            <p>Выберите какой язык знаете</p>
            <select 
                value={value}
                onChange={event => setValue(event.target.value)}
            >
                <option>Английский</option>
                <option>Русский</option>
                <option>Китайский</option>
            </select>
            <p>{value}</p>
        </div>
    </>
} 

export const Task22 = () => {
    const [value, setValue] = useState('');
    const arr = ['Москва', 'Питер', 'Воронеж', 'Казань']
    const option = arr.map((elem, index) => {
        return <option key={index}>{elem}</option>
    })
  
    return <>
        <div className="border">
            <h5>22. Пусть в массиве хранится список городов. Выведите с помощью цикла выпадающий список этих городов.</h5>
            <select 
                value={value}
                onChange={event => setValue(event.target.value)}
            >
                {option}
            </select>
            <p>{value}</p>
        </div>
    </>
} 

export const Task23 = () => {
    const [value, setValue] = useState(1);
 
    return <>
        <div className="border">
            <h5>23. Даны 3 радиокнопочки. Дан абзац. Сделайте так, чтобы значение выбранной радиокнопочки выводилось в этот абзац.</h5>
            <div>
            <input
                type="radio"
                name="radio"
                value="1"
                checked={value === '1' ? true : false}
                onChange={event => setValue(event.target.value)}
            />
            <input
                type="radio"
                name="radio"
                value="2"
                checked={value === '2' ? true : false}
                onChange={event => setValue(event.target.value)}
            />
            <input
                type="radio"
                name="radio"
                value="3"
                checked={value === '3' ? true : false}
                onChange={event => setValue(event.target.value)}
            />
                <p>Значение {value}</p>
            </div>
        </div>
    </>
} 

export const Task24 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
    function getSum(arr) {
        return Math.floor(arr.reduce((acc, elem) => acc + elem)/arr.length)
    }
    
    function handelChange(index, event) {
        setNotes([...notes.slice(0, index), +event.target.value, ...notes.slice(index + 1)]);
    }

    const result = notes.map((note, i) => {
        return <input
                    key={i}
                    value={note}
                    onChange={event => handelChange(i, event)}
                />
    })
   
    return <>
        <div className="border">
            <h5>24. Выведите на экран среднее арифметическое элементов этого массива. В цикле сделайте инпуты для редактирования элементов.</h5>
            <div>
                {result}
                <p>{getSum(notes)}</p>
            </div>
        </div>
    </>
} 

export const Task25 = () => {
    const initDate = {
        year:  2023,
        month: 12,
        day:   25,
    }

    const [obj, setObj] = useState(initDate)

    const dayWeek = new Date(obj.year, obj.month-1, obj.day).getDay();
    const week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

    function handlerChange(prop, event) {
        setObj({...obj, ...{[prop] : event.target.value}})
    }
 
    return <>
        <div className="border">
            <h5>25. Пусть в стейте хранится объект с датой. Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.</h5>
            <div>
                <input 
                    type="number" 
                    value={obj.year}
                    onChange={event => handlerChange('year', event)}
                />
                <input 
                    type="number" 
                    value={obj.month}
                    onChange={event => handlerChange('month', event)}
                />
                <input 
                    type="number" 
                    value={obj.day}
                    onChange={event => handlerChange('day', event)}
                />

                <p>Это день недели: {week[dayWeek]}</p>
            </div>
        </div>
    </>
} 

export const Task26 = () => {
    const cities = ['Москва', 'Питер', 'Воронеж', 'Казань'];
    const [arrCity, setCity] = useState(cities);
    const [value, setValue] = useState('');
    
    function addElem(elem) {
        const copyCities = [...arrCity, elem];
        setCity(copyCities);
    }
    const result = arrCity.map((elem, i) => {
        return <li key={i}> {elem} </li>
    })
  
    return <>
        <div className="border">
            <h5>26. Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.</h5>
            <div>
                <ul>{result}</ul>
                <input 
                    placeholder='Введите город'
                    onChange={event=> setValue(event.target.value)}
                />
                <button onClick={() => addElem(value)}>add</button>
            </div>
        </div>
    </>
} 

export const Task27 = () => {
    const [nums, setNums] = useState([2, 3, 4, 5])
    const [value, setValue] = useState('')
    const [id, setId] = useState(0)
    const arr = [...nums];

    function getSquare(index, event) {
        const square = Math.pow(event.target.textContent, 2)
        for(let i = 0; i < arr.length; i++) {
            arr[index] = square;
            setId(index)
        }
        setNums(arr);
        setValue(square); 
    }

    function deleteElem(index) {
        arr.splice(index, 1);
        setNums(arr)
    }

    function handleBlur(event, index) {
        arr[index] = event.target.value;
        setNums(arr);
        
    }

    function reversArray() {
        arr.reverse();
        setNums(arr);
    }


    const result = nums.map((elem, i) => {
        return <li key={i} >
            <span 
                style={{display: 'inline-block', width: '30px'}} 
                onClick={(event) => {getSquare(i, event)}}
            >
                {elem}
            </span> 
            <button onClick={() => deleteElem(i)}>del</button>
        </li>
    })
  
    return <>
        <div className="border">
            <h5>27. Дан массив с числами. Выведите его в виде списка ul. По клику на любую li возведите ее число в квадрат.</h5>
            <div>
                <ul>
                    {result}
                </ul>
                <button onClick={reversArray}>revers</button>
                <input 
                    type="text" 
                    value={value} 
                    onChange={event => setValue(event.target.value)}
                    onBlur={(event) => handleBlur(event, id)}
                />
            </div>
        </div>
    </>
} 

export const Task28 = () => {
    const obj = [
        {
            id: nanoid(4),
            name: 'Авокадо',
            price: '80'
        },
        {
            id: nanoid(4),
            name: 'Капуста',
            price: '20'
        },
        {
            id: nanoid(4),
            name: 'Горох',
            price: '45'
        }
    ];

    const [object, setObject] = useState(obj);
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [productEdit, setProductEdit] = useState('');
    const [priceEdit, setPriceEdit] = useState('');
   
    
    let result = object.map(elem => {
        return  <li key={elem.id}>
                    <span style={{display: 'inline-block', width: '240px'}}>Продукт {elem.name} - цена {elem.price}</span>
                    <button onClick={() => deleteElementHandler(elem.id)}>delete</button>
                    <button onClick={() => editElemHandler(elem)}>edit</button>
                </li> 
    })

    function createElemHandler() {
        const arr = [...object, {
            id: nanoid(4),
            name: product,
            price: price
        }];
        setObject(arr);
        setProduct('')
        setPrice('');
    }

    function deleteElementHandler(index) {
        const arr = [...object].filter(elem => {
            if(elem.id !== index) {
                return elem
            }
        })
        setObject(arr)
    }
  
    function editElemHandler(elem) {
        setProductEdit(elem.name);
        setPriceEdit(elem.price);
    }

    function saveChangesHandlerName (event) {
        if(event.key === 'Enter') {
            const arr = [...object].map(elem => {
                if (elem.name === productEdit) {
                    return { ...elem, name: event.target.value };
                }
                return elem;
            });
            setObject(arr);
            setProductEdit('');
        }
    }

    function saveChangesHandlerPrice(event) {
        if (event.key === 'Enter') {
            const arr = [...object].map(elem => {
                if (elem.price === priceEdit) {
                    return { ...elem, price: event.target.value };
                }
                return elem;
            });
            setObject(arr);
            setPriceEdit('');
        }
    }


    return <>
        <div className="border">
            <h5>28. Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива, тем самым добавляя новый li в конец тега ul.</h5>
            <div>
                <div style={{display: 'flex'}}>
                    <p>{result}</p>
                    <div>
                        <input type="text" defaultValue={productEdit} onKeyDown={event => saveChangesHandlerName(event)}/>
                        <input type="text" defaultValue={priceEdit} onKeyDown={event => saveChangesHandlerPrice(event)}/>
                    </div>
                </div>
                
                <input 
                    type="text"
                    placeholder='Продукт'
                    value={product}
                    onChange={event => setProduct(event.target.value)}
                />
                <input 
                    type="text"
                    placeholder='Цена'
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
                <button onClick={createElemHandler}>add</button>
            </div>
        </div>
    </>
} 

export const Task29 = () => {
    const initNotes = [
        {
            id: nanoid(4),
            name: 'name1',
            desc: 'long description 1',
            show: false,
        },
        {
            id: nanoid(4),
            name: 'name2',
            desc: 'long description 2',
            show: false,
        },
        {
            id: nanoid(4),
            name: 'name3',
            desc: 'long description 3',
            show: false,
        },
    ];
    
    const [notes, setNotes] = useState(initNotes);

    const result = [...notes].map(elem => {
        return  <p key={elem.id}>
                    {elem.name}
                    {!elem.show ? '' : elem.desc}
                    <button onClick={() => showElem(elem.id)}>show</button>
                </p>
    })

    function showElem(index) {
        const arr = [...notes].map(elem => {
            if(elem.id === index) {
                return { ...elem, show: !elem.show };
            }
            return elem;
        });
        setNotes(arr)
    }


    return <>
        <div className="border">
            <h5>29. В конце каждого абзаца сделайте кнопку, по нажатию на которую будет показываться полное описание продукта.</h5>
            <div>
                <div>
                    {result}
                </div>
                

            </div>
        </div>
    </>
} 

export const Task30 = () => {
  
    return <>
        <div className="border">
            <h5>30. Сделайте компонент Employee, выводящий данные работника на экран. Пусть этими данными будут фамилия, имя, отчество и зарплата. Оформите эти данные в нужную вам верстку. Выведите в компоненте App трех работников с разными данными.</h5>
            <Employee name="Ivan" surname="Ivanov" salary="500"/>
            <Employee name="Petya" surname="Petrov" salary="650"/>
            <Employee name="Dima" surname="Sidorov" salary="420"/>
        </div>
    </>
} 

export const Task31 = () => {
    const users = [
        {id: nanoid(3), name: "Ivan", surname: "Ivanov", age: 30},
        {id: nanoid(3),  name: "Petya", surname: "Petrov" , age: 31},
        {id: nanoid(3), name: "Dima", surname: "Sidorov", age: 32},
    ];

    const result = users.map(elem => {
        return <Employee_1
                key={elem.id}
                name={elem.name}
                surname={elem.surname}
                age={elem.age}
            />
    })

    return <>
        <div className="border">
            <h5>31. С помощью этого массива выведите трех юзеров. Оформите их вывод в виде таблицы table.</h5>
            <div>
                {result}
            </div>
            
        </div>
    </>
} 

export const Task32 = () => {
    const products = [
        { id: nanoid(3), name: 'Яблоко', cost: 30, card: false, isEdit: false},
        { id: nanoid(3), name: 'Банан', cost: 31, card: false, isEdit: false},
        { id: nanoid(3), name: 'Груша', cost: 32, card: false,  isEdit: false},
      ];
    
      const [arrProducts, setProducts] = useState(products);
    
      const result = [...arrProducts].map((elem) => (
        <Product
          key={elem.id}
          id={elem.id}
          name={elem.name}
          cost={elem.cost}
          isCard={elem.card}
          addTOCatd={addTOCatd}
          isEdit={elem.isEdit}
          toggleMode={toggleMode}
          editElem={editElem}
        />
      ));

      function addTOCatd(id) {
        setProducts([...arrProducts].map(elem => {
            if(elem.id === id) {
                elem.card = true;
            }
            return elem;
        }))
      }
      function toggleMode(id) {
        setProducts([...arrProducts].map(elem => {
            if(elem.id === id) {
                elem.isEdit = !elem.isEdit
            }
            return elem;
        }))
      }
    
      function editElem(event, value, id) {
        setProducts([...arrProducts].map(elem => {
            if(elem.id === id) {
                elem[value] = event.target.value;
            }
            return elem;
        }))
      }


      return (
        <div className="border">
          <h5>32. Переберите этот массив циклом и выведите всех юзеров на экран. Создайте для отображения юзера отдельный компонент User</h5>
          <table>
            <thead>
                <tr>
                    <td>Название</td>
                    <td>Цена</td>
                    <td>Изменить</td>
                    <td>Корзина</td>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
          </table>
        </div>
      );
} 

export const Task33 = () => {
    const products = [
        { id: nanoid(3), name: 'Яблоко', cost: 30},
        { id: nanoid(3), name: 'Банан', cost: 31},
        { id: nanoid(3), name: 'Груша', cost: 32},
      ];

    const [prods, setProds] = useState(products);

    function changeField(id, field, event) {
        setProds(prods.map(prod => {
            if (prod.id === id) {
                prod[field] = event.target.value;
            }
            
            return prod;
        }));
    }
    
    const rows = prods.map(prod => {
        return <Product_1
            key ={prod.id}
            id  ={prod.id}
            name={prod.name}
            cost={prod.cost}
            changeField={changeField}
        />;
    });
        

    return <>
        <div className="border">
            <h5>33. Переберите этот массив циклом и выведите всех юзеров на экран. Создайте для отображения юзера отдельный компонент User</h5>
            <table>
            <thead>
                <tr>
                    <td>Название</td>
                    <td>Цена</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            </table>
        </div>
    </>
   
} 

export const Task34 = () => {
    const [temp, setTemp] = useState('')

    return <>
        <div className="border">
            <h5>34. Сделайте калькулятор температуры воды. Он будет представлять собой инпут, в который пользователь будет вводить температуру, и абзац, в который будет выводится вердикт: вода жидкая, вода твердая, вода газообразная.</h5>
            <TempInp temp={temp} setTemp={setTemp}/>
            <Verdict temp={temp}/>
        </div>
    </>
   
} 

export const Task35 = () => {
    const [temp, setTemp] = useState({ celsius: '', fahrenheit: '' })

    function calculateTemp(event, type) {
        if (type === 'celsius') {
          setTemp({
            ...temp,
            celsius: event.target.value,
            fahrenheit: (event.target.value * 9 / 5) + 32
          });
        } else if (type === 'fahrenheit') {
          setTemp({
            ...temp,
            celsius: (event.target.value - 32) * 5 / 9,
            fahrenheit: event.target.value
          });
        }
      }

    return <>
        <div className="border">
            <h5>35. Есть два инпута: в первый вводится температура в градусах Фаренгейта, а во второй - в градусах Цельсия.</h5>
            <TempInp_1 temp={temp.celsius} type="celsius" calculateTemp={calculateTemp}/>
            <TempInp_1 temp={temp.fahrenheit} type="fahrenheit" calculateTemp={calculateTemp}/>
        </div>
    </>
   
} 

export const Task36 = () => {
    function getSum(arr) {
        let res = 0;
        
        for (let elem of arr) {
            res += +elem;
        }
        
        return res;
    }
    
 
    const [value, setValue] = useState('');
    const [nums, setNums] = useState([1, 2, 3]);
    
    function handleBlur() {
        setNums([...nums, value]); // добавляем элемент в массив
    }
    

    return <>
        <div className="border">
            <h5>36. Дан инпут, пусть введенное число добавляется в массив и выводится сумма чисел</h5>
            <p>массив = {nums}</p>
            <p>сумма чисел = {getSum(nums)}</p>
        <input placeholder='Введите число' value={value} onChange={event => setValue(event.target.value)} onBlur={handleBlur} />
        </div>
    </>
    
} 

export const Task37 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	const [value, setValue] = useState('');
	
	const result = notes.map((note, index) => {
		return <p key={index} onClick={() => startEdit(index)}>
			{note}
		</p>;
	});
	
	function startEdit(index) {
		setEditNum(index);
		setValue(notes[index]); // пишем текст редактируемого элемента в отдельный стейт
	}
	
	function changeItem(event) {
		setValue(event.target.value);
		setNotes([...notes.slice(0, editNum), event.target.value,...notes.slice(editNum + 1)]);
	}
	
    return <>
        <div className="border">
            <h5>37. Код для редактирования элементов массива</h5>
            {result}
		    <input value={value} onChange={changeItem} />
        </div>
    </>
   
} 

export const Task38 = () => {
    const [listToDo, setListToDo] = useState([]);

    function addTaskToList(value, setValue) {
        setListToDo([...listToDo, { id: nanoid(3) , task: value, isDone: true, isEdit: true}]);
        setValue('');  
    }

    function addTaskToListEnter(event, value, setValue) {
        if(event.key === 'Enter') {
            addTaskToList(value, setValue);
        }
    }

    function changeTask(id, key, value) {
        setListToDo(prevList => prevList.map(item => {
            if(item.id === id){
                return {...item, [key]: value}
            }
            return item;
        }))
    }

    function deleteTask(id) {
        setListToDo(prevList => prevList.filter((item) => {
            if(item.id !== id){
                return item
            }
        }))
    }
   
    const result = [...listToDo].map((item, i) => {

        const textStyle = {textDecoration: item.isDone ? 'none' : 'line-through'}
                    
        return  <TaskItem
                    key={item.id}
                    item={item}
                    index={i}
                    changeTask={changeTask}
                    textStyle={textStyle}
                    deleteTask={deleteTask}
                />
    })
    
    return <>
        <div className="border">
            <h5>38. Проект Чеклист в React</h5>
            <div className="wrapper">
                <Navbar 
                    addTaskToList={addTaskToList}
                    addTaskToListEnter={addTaskToListEnter}
                />
                <ul>{result}</ul>
            </div>
            
        </div>
    </>
   
} 

export const Task39 = () => {
    

    return <>
        <div className="border">
            <h5>39. Проект Блокнот в React</h5>
            
        </div>
    </>
   
} 





