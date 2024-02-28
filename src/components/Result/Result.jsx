import "./Result.css";
import {formatter} from "../../util/investment.js";

export default function Result({ results }) {
	return <table id="result">
		<thead>
			<tr>
				<th>Year</th>
				<th>Investment Value</th>
				<th>Interest(Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
		</thead>
		<tbody>
		{results.map(result => (
			<tr key={result.year}>
				<th>{result.year}</th>
				<td>{formatter.format(result.valueEndOfYear)}</td>
				<td>{formatter.format(result.interest)}</td>
				<td>{formatter.format(result.totalInterest)}</td>
				<td>{formatter.format(result.investedCapital)}</td>
			</tr>
		))}
		</tbody>
	</table>
}