import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputs.duration >= 1;

  const handleOnChangeInput = (value, identifier) => {
    setInputs((prev) => {
      return {
        ...prev,
        [identifier]: +value,
      };
    });
  };

  const annualData = calculateInvestmentResults(inputs);

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleOnChangeInput} inputs={inputs} />
      {inputIsValid && <Result annualData={annualData} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
