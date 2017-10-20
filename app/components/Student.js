import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function Student(props){
  const { students, campi, studentId } = props;
  const student = students.filter(student => student.id === studentId )[0];
  const campus = campi.filter(campus => student.campusId === campus.id)[0];

  return (
    <div className="col-xs-4">
        <img src="https://www.crayola.com/~/media/Crayola/Lesson%20Plans/lesson_plans/1202.jpg?mh=762&mw=645" />
        <div className="caption">

          <h5><span>{student.name}</span></h5>
          <h5><span>Email: {student.email}</span></h5>
          <h3><NavLink to={`/campi/${campus.id}`}>{ campus.hasOwnProperty('id') && campus.name }</NavLink></h3>
        </div>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    students: state.students,
    campi: state.campi,
    studentId: Number(ownProps.match.params.studentsId)
  };
};

export default withRouter(connect(mapStateToProps)(Student));
