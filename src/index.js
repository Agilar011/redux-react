import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
        <UserComponent />
      </div>
    </Provider>
  </React.StrictMode>
);
