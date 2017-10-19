import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { fetchStudent } from '../store/index';

class Student extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(props){
    const studentId = Number(props.routeProps.match.params.studentId);
    fetchStudent(studentId)
  }

  render(){
    const { student } = props;
    const { campus } = props;
    return(
      <div >
        <div className="container">
          <h4>{campus.name}</h4>
          <h4>{student.name}</h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {

  return {
    student: state.students.filter(student => student.id === studentId ),
    campus: state.campi.find(campus=> campus.id === this.student.campusId)
  };
};

export default withRouter(connect(mapStateToProps)(Student));
