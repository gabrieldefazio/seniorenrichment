import Campi from './Campi';
import Students from './Students'
import Campus from './Campus'
import Student from './Student'
import NewCampus from './NewCampus'
import NewStudent from './NewStudent'
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import store, { fetchCampi, fetchStudents } from '../store/index'


export default class Root extends Component {

  componentWillMount () {
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
            <Route exact path="/" component={Campi} />
            <Route exact path="/campi" component={Campi} />
            <Route path="/campi/:campusId" component={Campus} />
            <Route exact path="/new-campus" component={NewCampus} />
            <Route exact path={`/new-campus/:campusId`} component={NewCampus} />
            <Route exact path="/students" component={Students} />
            <Route path="/students/:studentsId" component={Student}/>
            <Route exact path="/new-student" component={NewStudent} />
            <Route path="/new-student/:studentId" component={NewStudent} />
            </Switch>
          </div>
        </div>
    );
  }
}