import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import {employeeReducer} from "./redux/reducers/EmployeeReducer"
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(employeeReducer,composeWithDevTools());
const rootElement = (document.getElementById('root'));
ReactDOM.render(
 
  <Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
rootElement
 
 
);

