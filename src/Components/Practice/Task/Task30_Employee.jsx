export default function showEmployee({name, surname, salary}) {

    return <>
        <div>
            Сотрудник {surname} {name} - зарплата {salary}
        </div>
    </>
}
