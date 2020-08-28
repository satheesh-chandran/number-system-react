import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    if (this.props.expression.test(value)) {
      this.props.onChange(parseInt(value, this.props.base));
    }
  }

  render() {
    return (
      <div>
        <label>Base {this.props.base} : </label>
        <input
          type='text'
          value={this.props.value}
          onChange={this.onChange}
        ></input>
      </div>
    );
  }
}

export default Base;
