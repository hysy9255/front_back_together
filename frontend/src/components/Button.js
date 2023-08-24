import React from "react";

const Button = () => {
  const getData = async () => {
    const url = "http://localhost:5000/post";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  return <button>Button</button>;
};

export default Button;
