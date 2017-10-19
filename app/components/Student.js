import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';



class Student extends Component {
  constructor (props) {
    super(props)
    this.localState = props.studentState
    this.localState.studentId = Number(props.routeProps.match.params.studentsId)
    this.student = this.localState.students.filter(student => student.id === this.localState.studentId )[0]
    this.campus = this.localState.campi.filter(campus => this.student.campusId === campus.id)[0]
  }

  componentWillMount (props){
    console.log("state", this.state)
  }

  render(props){
    const { student } = this;
    const { campus } = this;
  return (
    <div className="campus">
      <div>
        <h3>{ student.hasOwnProperty('id') && student.name }</h3>
        <h3><NavLink to={`/campi/${campus.id}`}>{ campus.hasOwnProperty('id') && campus.name }</NavLink></h3>
      </div>
    </div>
  );
  }

}

const mapStateToProps = function (state, ownProps) {
  console.log('state of student',state);
  //
  //
  // const studentId = Number(ownProps.match.params.studentsId);

  return {
    // student: state.students.filter(student => student.id === studentId ),
    // // campus: state.campi.find(campus=> campus.id === this.student.campusId)
  };
};

export default withRouter(connect(mapStateToProps)(Student));
