import React from 'react';
import './App.css';
import Base from './base';

const expressions = [
  /^[0-1\b]+$/,
  /^[0-2\b]+$/,
  /^[0-3\b]+$/,
  /^[0-4\b]+$/,
  /^[0-5\b]+$/,
  /^[0-6\b]+$/,
  /^[0-7\b]+$/,
  /^[0-8\b]+$/,
  /^[0-9\b]+$/
];

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.onChange = this.onChange.bind(this);
  }

  async onChange(number) {
    await this.setState({ number });
    console.log(number, this.state.number);
  }

  render() {
    const baseComponents = expressions.map((exp, index) => {
      const baseValue = index + 2;
      const number = this.state.number;
      const value = this.state.number ? number.toString(baseValue) : '';
      return (
        <Base
          key={index}
          base={baseValue}
          expression={exp}
          onChange={this.onChange}
          value={value}
        />
      );
    });
    return <div>{baseComponents}</div>;
  }
}

// parseInt('1001', 2);
// const decimalToBinary = (start, end, base) => {
//   const range = (start, end) =>
//     Array.from(new Array(end - start), (_, index) => start + index);
//   return range(start, end).map(num => num.toString(base));
// };

// decimalToBinary(0, 20, 2);

export default Master;
