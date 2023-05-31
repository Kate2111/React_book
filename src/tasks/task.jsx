import { nanoid } from 'nanoid' 
import { useId, useState } from 'react';
import uuid from 'react-uuid';

import React, { Component } from 'react';

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
    
  
    return <>
        <div className="border">
            <h5>24. </h5>
            <div></div>
        </div>
    </>
} 

export const Task25 = () => {
    
  
    return <>
        <div className="border">
            <h5>25. </h5>
            <div></div>
        </div>
    </>
} 

export const Task26 = () => {
    
  
    return <>
        <div className="border">
            <h5>26. </h5>
            <div></div>
        </div>
    </>
} 

export const Task27 = () => {
    
  
    return <>
        <div className="border">
            <h5>27. </h5>
            <div></div>
        </div>
    </>
} 

export const Task28 = () => {
    
  
    return <>
        <div className="border">
            <h5>28. </h5>
            <div></div>
        </div>
    </>
} 

export const Task29 = () => {
    
  
    return <>
        <div className="border">
            <h5>29.</h5>
            <div></div>
        </div>
    </>
} 

export const Task30 = () => {
    
  
    return <>
        <div className="border">
            <h5>30..</h5>
            <div></div>
        </div>
    </>
} 









