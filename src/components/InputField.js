import React, { useState } from "react";

const InputField = ({ name, id, value, onChange, type, error, charCount }) => {
  const inputStyles = {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: `1px solid ${error ? "red" : "#A9A9A9"}`,
    fontFamily: "var(--ifm-font-family-base)",
    fontSize: "14px",
    color: "var(--aoijs-color)",
    background: "var(--aoijs-color)",
    position: "relative",
  };

  const [avatarUrl, setAvatarUrl] = useState("");

  const handleInputChange = (event) => {
    onChange(event);
  };

  /*
  const handleInputBlur = async () => {
    if (type !== "number") {
      return;
    }
    if (value === "") {
      return;
    }
    if (value.length < 18) {
      return;
    }
    let response;
    try {
      response = await fetch(
        `https://someapi.frenchwomen.repl.co/uinfo/${value}`
      );
    } catch {
      return;
    }
    try {
      const text = await response.text();
      if (text.startsWith("<")) {
        return;
      }
      const data = JSON.parse(text);
      if (data && data.avatar) {
        setAvatarUrl(data.avatar);
      }
    } catch (error) {
      return;
    }
  };
*/
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
            style={{ fontSize: "12px", color: charCount >= 500 ? "red" : "" }}
          >
            {charCount === "undefined" ? "0" : charCount}/{500}
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
            // onBlur={handleInputBlur}
            style={inputStyles}
            inputMode="numeric"
            pattern="[0-9]*"
            required
          />
          {avatarUrl && (
            <img src={avatarUrl} alt="Avatar" style={avatarStyle} />
          )}
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
            style={{ fontSize: "12px", color: charCount >= 50 ? "red" : "", marginTop: "5px" }}
          >
            {charCount === "undefined" ? "0" : charCount}/{50}
          </div>
        </div>
      );
  }

  return <div>{inputElement}</div>;
};

export default InputField;

const avatarStyle = {
  position: "absolute",
  top: "50%",
  right: "8px",
  transform: "translateY(-50%)",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
};
