import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

// Componente global que toda aplicação poderá acessar
const store = createStore(rootReducer);

export default store;