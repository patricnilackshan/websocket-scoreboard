import React from "react";

function Input({ name, placeholder, handleInput, type = "text", label }) {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        onChange={handleInput}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}

export default Input;
