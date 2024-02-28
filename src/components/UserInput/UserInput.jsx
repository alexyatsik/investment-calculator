import "./UserInput.css";
import InputGroup from "./InputGroup.jsx";

export default function UserInput() {
	return <div id="user-input" className="input-group">
		<InputGroup label="Initial Investment" />
		<InputGroup label="Annual Investment" />
		<InputGroup label="Expected Return" />
		<InputGroup label="Duration" />
	</div>
}