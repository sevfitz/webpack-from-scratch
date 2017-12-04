import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salutation: 'salutation',
      name: 'world'
    };
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    return (
      <main>
        <div className="greeting">{this.state.salutation}</div>
        <div>
          Hello {this.state.name}
        </div>
        <input name="name" value={this.state.name} onChange={this.handleChange} />
      </main>
    )
  }
}