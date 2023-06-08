import ProductField from './Task33_ProductField'


export default function Product({ id, name, cost, changeField }) {
	return <tr>
		<ProductField id={id} text={name} type="name" changeField={changeField} />
		<ProductField id={id} text={cost} type="cost" changeField={changeField} />
	</tr>;
}