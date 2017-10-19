import Campi from './Campi';
import Students from './Students'
import Campus from './Campus'
import Student from './Student'
import NewCampus from './NewCampus'
import NewStudent from './NewStudent'
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
            <Route path="/campi/:campusId" render={(routeProps) => <Campus routeProps={routeProps} campi={store.getState().campi}  students={store.getState().students}/>}/>
            <Route exact path="/new-campus" component={NewCampus} />
            <Route exact path="/students" component={Students} />
            <Route path="/students/:studentsId" render={(routeProps) => <Student routeProps={routeProps} studentState={store.getState()} />} />
            <Route exact path="/new-student" component={NewStudent} />
            </Switch>
          </div>
        </div>
    );
  }
}