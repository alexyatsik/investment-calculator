export default function InputGroup({ label }) {
	return <div>
		<label>{label}</label>
		<input type="number" min="0"/>
	</div>
}