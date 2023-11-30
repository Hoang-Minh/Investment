import React from "react";
import { formatter } from "../util/investment";

function Result({ annualData }) {
  const initalInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {annualData.map((x) => {
          const totalInterest =
            x.valueEndOfYear - x.annualInvestment * x.year - initalInvestment;

          const totalAmountInvested = x.valueEndOfYear - totalInterest;

          return (
            <tr key={x.year}>
              <td>{x.year}</td>
              <td>{formatter.format(x.valueEndOfYear)}</td>
              <td>{formatter.format(x.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
        <tr></tr>
      </tbody>
    </table>
  );
}

export default Result;
