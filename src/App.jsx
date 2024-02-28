import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function toCamelCase(str) {
  return str
    // Split the string into an array of words
    .split(' ')
    // Transform the array of words into camel case
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    // Join the transformed words back into a string
    .join('');
}

const INITIAL_VALUE = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {
  const [results, setResults] = useState(calculateInvestmentResults(INITIAL_VALUE));
  const [data, setData] = useState(INITIAL_VALUE);

  function inputDataOnChangeHandler({name, value}) {
    const parsedName = toCamelCase(name);
    const parsedValue = parseFloat(value);
    setData(prevState => {
      const newState = {...prevState, [parsedName]: parsedValue}

      const calculatedResults = calculateInvestmentResults(newState);
      setResults(calculatedResults);

      return newState;
    });
  }

  return (
    <>
      <Header />
      <UserInput inputDataChangeHandler={inputDataOnChangeHandler} />
      <Result results={results} />
    </>
  )
}

export default App
