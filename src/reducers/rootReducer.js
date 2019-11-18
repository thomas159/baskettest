import {combineReducers} from 'redux';
import productsReducer from './productsReducer'
import basketReducer from './basketReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer
});

export default rootReducer;