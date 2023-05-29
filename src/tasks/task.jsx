import { nanoid } from 'nanoid' 
import { useId } from 'react';
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
