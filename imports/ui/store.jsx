import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import taskApp from './reducers';

let store = createStore(taskApp, applyMiddleware(thunk));

console.log('store', store);

export default store;
