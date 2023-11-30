import React from "react";

function UserInput({ onChangeInput, inputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onChangeInput(event.target.value, "initialInvestment")
            }
            value={inputs.initialInvestment}
            required
          ></input>
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onChangeInput(event.target.value, "annualInvestment")
            }
            value={inputs.annualInvestment}
            required
          ></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) =>
              onChangeInput(event.target.value, "expectedReturn")
            }
            value={inputs.expectedReturn}
            required
          ></input>
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => onChangeInput(event.target.value, "duration")}
            value={inputs.duration}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
