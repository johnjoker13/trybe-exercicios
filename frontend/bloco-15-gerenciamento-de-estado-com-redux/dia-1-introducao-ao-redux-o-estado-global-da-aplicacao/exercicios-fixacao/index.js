const Redux = require('redux');
import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/indice.js';

const store = createStore(reducerCombinado);

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};
    
const reducer = (state = ESTADO_INICIAL, action) => {
  if(action.type == 'LOGIN') {
    return {
      ...state,
      login: !state.login,
      email: action.email,
    }
  };
  return state;
};
    
store.dispatch(fazerLogin('johnjoker13@trybe.com'));

console.log(store.getState());