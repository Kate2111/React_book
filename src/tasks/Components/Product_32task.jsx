import ProductField from './ProductField_32task'


export default function showEmployee({id, name, cost, isCard, addTOCatd, isEdit, toggleMode, editElem}) {

    return <>
        <tr>
            <td style={{width:'90px'}}>
                <ProductField 
                    id={id}
                    text={name}
                    type='name'
                    editElem={editElem}
                />
            </td>
            <td style={{width:'70px'}}>
                <ProductField 
                    id={id}
                    text={cost}
                    type='cost'
                    editElem={editElem}
                />
            </td>
            <td>
                <button onClick={() => toggleMode(id)}>{!isEdit ? 'редактировать' : 'сохранить'}</button>
            </td>
            <td>
                <button onClick={() => addTOCatd(id)}>{isCard ? 'добавлено' : 'добавить'}</button>
            </td>
        </tr>        
    </>
}