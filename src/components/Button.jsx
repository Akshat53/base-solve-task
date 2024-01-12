import React from "react";

const Button = (props) => {
  const { label, onClick, type ,className} = props;
  return (
    <button onClick={onClick} type={type} className={className}>
      {label}
    </button>
  );
};

export default Button;
