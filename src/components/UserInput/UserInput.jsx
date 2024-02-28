import "./UserInput.css";
import InputGroup from "./InputGroup.jsx";

export default function UserInput({ inputDataChangeHandler }) {
	function inputOnChangeHandler(event) {
		inputDataChangeHandler({
			name: event.target.name,
			value: event.target.value
		});
	}

	const inputFields = [
		"Initial Investment",
		"Annual Investment",
		"Expected Return",
		"Duration"
	]

	return <div id="user-input" className="input-group">
		{inputFields.map(field => (
			<InputGroup key={field} label={field} onChangeHandler={inputOnChangeHandler} />
		))}
	</div>
}