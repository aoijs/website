import React, { useState } from "react";

const InputField = ({ name, id, value, onChange, type, error, charCount }) => {
  const inputStyles = {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    border: `1px solid ${error ? "red" : "#3f51b5"}`,
    transition: "background-color 0.3s, color 0.3s",
    fontFamily: "var(--ifm-font-family-base)",
    fontSize: "14px",
    fontColor: "white",
    position: "relative",
    outline: "none",
    boxShadow: "2px 3px 3px rgba(0, 0, 0, 0.1)",
  };

  const handleInputChange = (event) => {
    onChange(event);
  };

  let inputElement = null;

  switch (type) {
    case "textarea-description":
      inputElement = (
        <div>
          <textarea
            name={name}
            id={id}
            value={value}
            onChange={handleInputChange}
            style={{ ...inputStyles, minHeight: "155px", resize: "none" }}
            required
          />
          <div
            style={{ fontSize: "12px", color: charCount >= 500 ? "red" : "#3f51b5" }}
          >
            {charCount === undefined ? "0" : charCount}/{500}
          </div>
        </div>
      );
      break;
    case "textarea-code":
      inputElement = (
        <textarea
          name={name}
          id={id}
          value={value}
          onChange={handleInputChange}
          style={{ ...inputStyles, minHeight: "155px", resize: "none" }}
          required
        />
      );
      break;
    case "number":
      const handleNumberChange = (event) => {
        const { value } = event.target;

        const filteredValue = value.replace(/[^0-9]/g, "");

        if (filteredValue.length > 20) {
          return;
        }
        onChange({ target: { name, value: filteredValue } });
      };

      inputElement = (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={handleNumberChange}
            style={inputStyles}
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />
        </div>
      );
      break;
    case "small":
      inputElement = (
        <input
          type="text"
          name={name}
          id={id}
          value={value}
          onChange={handleInputChange}
          style={{ ...inputStyles, width: "50%", fontSize: "12px" }}
          required
        />
      );
      break;
    default:
      inputElement = (
        <div>
          <input
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={handleInputChange}
            style={{ ...inputStyles, resize: "none" }}
            required
          />
          <div
            style={{ fontSize: "12px", color: charCount >= 50 ? "red" : "#3f51b5", marginTop: "5px" }}
          >
            {charCount === undefined ? "0" : charCount}/{50}
          </div>
        </div>
      );
  }

  return <div>{inputElement}</div>;
};

export default InputField;