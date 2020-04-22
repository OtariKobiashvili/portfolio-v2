import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';

import { getInitialState, getNewStore } from '../model/store';
import { Root } from '../view/root';

export class MainController {

  private store: Store;

  constructor() {
    this.store = getNewStore(getInitialState());
  }

  init() {
    this.render();
  }

  render() {
    ReactDOM.render(<Root store={this.store}/>, document.getElementById('root'));
  }
}
