import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <div className="row main">

            <div className="title col-md-5">
              <h1>My Company</h1>
            </div>

            <div className="form-container col-md-7">
              <Form/>
            </div>

          </div>
      </div>
    );
  }
}

export default App;
