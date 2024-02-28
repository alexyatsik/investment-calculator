export default function InputGroup({ label, onChangeHandler }) {
	return <div>
		<label>{label}</label>
		<input type="number" name={label} min="0" onChange={onChangeHandler}/>
	</div>
}