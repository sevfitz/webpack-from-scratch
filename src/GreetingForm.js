import React, { Component } from 'react';

export default class Greeting extends Component {
  render() {
    const { salutation, name, onChange } = this.props;
    return (
      <main>
        <input name="name" value={name} onChange={onChange} />
      </main>
    );
  }
}
