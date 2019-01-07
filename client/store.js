/* eslint-disable import/no-cycle */
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
export default store;
