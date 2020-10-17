import React from 'react';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
    </Provider>
    
  );
}

export default App;
