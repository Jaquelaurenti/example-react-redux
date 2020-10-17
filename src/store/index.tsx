import { createStore } from 'redux';

// Componente global que toda aplicação poderá acessar
const store = createStore(() => []);

export default store;