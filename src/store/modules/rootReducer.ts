// combina vários reducers (modulos) dentro de 
// um unico estado disponível na aplicação

import { combineReducers } from "redux";
import cart from './cart/reducer';

export default combineReducers({
  cart,
})