import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import taskApp from './reducers';

let store = createStore(taskApp, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

console.log('store', store);

export default store;
