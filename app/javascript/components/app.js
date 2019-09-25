import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import TopNavBar from './layout/top-nav-bar';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <TopNavBar />
    </Provider>
  );
};

export default App;
