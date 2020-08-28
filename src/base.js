import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.onChange = this.onChange.bind(this);
  }

  async onChange(event) {
    const value = event.target.value;
    if (this.props.expression.test(value)) {
      await this.setState({ value });
      this.props.onChange(parseInt(this.state.value, this.props.base));
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
