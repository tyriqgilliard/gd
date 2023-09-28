import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      {/* <label
      style={{
        fontSize: '12px',
        color: 'rgb(0, 0, 0)',
      }}
      >{label}</label> */}
      <input
      style={{
        flex: '1',
        minWidth: '40%',
        margin: '20px 10px 0px 0px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid gray',
      }}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span
        style={{
          fontSize: "12px",
          padding: "3px",
          color: "red",
          display: "none",
        }}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
