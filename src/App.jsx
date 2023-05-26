import './App.css'

function App() {
  //1
  function showNum(number) {
    alert(number)
  }

  //2
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const res = arr.map(function(item, index) {
		return <li key={index}>{item}</li>;
	});
	
  //3
  const users = [
    {id: 1,name: 'user1', surn: 'surn1', age: 30},
    {id: 2,name: 'user2', surn: 'surn2', age: 31},
    {id: 3,name: 'user3', surn: 'surn3', age: 32},
  ];

  const userShow = users.map(function(elem) {
    return <li key={elem.id}>Имя: {elem.name}, Фамилия: {elem.surn}, Возраст: {elem.age}</li>
  })

  //4
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

  return (
    <>
      {/* task 1 */}
      <div className="border">
        <h5>Сделайте так, чтобы по клику на первую кнопку алертом выводилось число 1, по клику на вторую кнопку - число 2, а по клику на третью - число 3.</h5>
        <button onClick={() => showNum(1)}>act1</button>
        <button onClick={() => showNum(2)}>act2</button>
        <button onClick={() => showNum(3)}>act3</button>
      </div>

      {/* task 2 */}
      <div className="border">
        <h5>С помощью метода map сформируйте следующий код</h5>
        <ul>
          {res}
        </ul>
      </div>
      
      {/* task 3 */}
      <div className="border">
        <h5>Выведите элементы этого массива в виде списка ul.</h5>
        <ul>
          {userShow}
        </ul>
      </div>

      {/* task 4 */}
      <div className="border">
        <h5>Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.</h5>
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
  )
}

export default App
