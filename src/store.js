import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { downloadTemp, changeGraph } from './getData.middleware';


const initialState = {};

const middleWare = [thunk, downloadTemp, changeGraph];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare)),
);

export default store;
