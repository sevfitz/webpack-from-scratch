import React, { Component } from 'react';

export default class Greeting extends Component {
  render() {
    const { salutation, name } = this.props;
    return (
      <main>
        <div className="greeting"><span>{salutation}</span></div>
        <div>
          Hello {name}
        </div>
      </main>
    );
  }
}