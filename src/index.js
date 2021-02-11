import './style/App.scss';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import 'leaflet/dist/leaflet.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './store';

ReactDOM.render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
      <App />
  //   </PersistGate>
  // </Provider>,

  ,document.getElementById('root')
);
