'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import store from './myRedux';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
