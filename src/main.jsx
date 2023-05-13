import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Provider } from 'react-redux'
import store from "./assets/Store.jsx"
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
    </Router>

  ,
);
