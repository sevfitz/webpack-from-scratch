import React, { Component } from 'react';
import style from './Greeting.scss';

export default class Greeting extends Component {
  render() {
    const { salutation, name } = this.props;
    return (
      <main>
        <div className={style.greeting}><span>{salutation}</span></div>
        <div>
          Hello {name}
        </div>
      </main>
    );
  }
}