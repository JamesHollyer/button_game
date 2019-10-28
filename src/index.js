import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.js';
import root_reducer from './reducers/root_reducer';

let store = createStore(root_reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("app"));