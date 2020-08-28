import React from 'react';
import BaseComponent from './BaseComponent';
import expressions from './expressions';

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(number) {
    this.setState({ number });
  }

  render() {
    const baseComponents = expressions.map((exp, index) => {
      const baseValue = index + 2;
      const { number } = this.state;
      const value = number ? number.toString(baseValue) : '';
      return (
        <BaseComponent
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

export default Master;
