import Index from './Index'
import Campi from './Campi';
import Students from './Students'
import Campus from './Campus'
import Student from './Student'
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import store, { fetchCampi, fetchStudents } from '../store/'


export default class Root extends Component {

  componentDidMount () {
    const campiThunk = fetchCampi();
    store.dispatch(campiThunk);
    const studentThunk = fetchStudents();
    store.dispatch(studentThunk);
  }

  render () {
    return (
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10" id="main">
            <Switch>
            <Route exact path="/campi" component={Campi} />
            <Route path="/campi/:campusId" component={Campus} />
            <Route exact path="/students" component={Students} />
            <Route path="/students/:studentsId" component={Student} />
            <Redirect to="/campi" />
            </Switch>
          </div>
        </div>
    );
  }
}