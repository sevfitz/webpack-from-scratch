import React, { Component } from 'react';
import './App.scss';
import Greeting from './Greeting';
import GreetingForm from './GreetingForm';

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
    const { salutation, name } = this.state;
    return (
      <main>
        <Greeting salutation={salutation} name={name}/>
        <GreetingForm salutation={salutation} name={name} onChange={this.handleChange}/>
        {/* <div className="greeting"><span>{this.state.salutation}</span></div>
        <div>
          Hello {this.state.name}
        </div>
        <input name="name" value={this.state.name} onChange={this.handleChange} /> */}
      </main>
    )
  }
}