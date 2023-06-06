import { useState } from 'react';

export default function ProductField({ id, text, type, changeField }) {
	const [isEdit, setIsEdit] = useState(false);
	
	return <td>
		{
			isEdit
			? <input
				value={text}
				onChange={event => changeField(id, type, event)}
				onBlur={() => setIsEdit(false)}
			/>
			: <span onClick={() => setIsEdit(true)}>{text}</span>
		}
	</td>;
}