import React from 'react';

const BaseComponents = function (props) {
  const onChange = function (event) {
    const value = event.target.value;
    if (props.expression.test(value))
      props.onChange(parseInt(value, props.base));
  };
  return (
    <div>
      <label>Base {props.base} : </label>
      <input type='text' value={props.value} onChange={onChange}></input>
    </div>
  );
};

export default BaseComponents;
