import React from "react";
import Form from "react-bootstrap/Form";

const Select = (props) => {
  const { onChange, options, placeholder, value, name } = props;
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={onChange}
      value={value}
      name={name}
    >
      <option>{placeholder}</option>
      {options.map((option, i) => {
        return (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default Select;
