import React from 'react';
import { Provider } from 'react-redux';

import './src/config/reactotron';
import store from './src/store';
import Router from './src/routes';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
)

export default App;
