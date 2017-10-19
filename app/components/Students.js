import React from 'react';
import { withRouter, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Students (props) {
  const { students } = props
  const { campi } = props;

  return (
    <div>
      <h3>Students</h3>
    <table className='table'>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Campus</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {
        students.map(student => (
          <tr key={student.id} type={student.id}>
            <td>
            <NavLink to={`/students/${student.id}`} >
              <span>{ student.name }</span>
            </NavLink>
            </td>
            <td>{ student.email }</td>
            <td><NavLink to={`/campi/${campi.filter(campus => student.campusId === campus.id)[0].id}`}>{ campi.filter(campus => student.campusId === campus.id)[0].name }</NavLink></td>
            <td><NavLink to="/updateStudent" className="btn" >+</NavLink></td>
            <td><NavLink to="/deleteStudent" className="btn">X</NavLink></td>
          </tr>
        ))
      }
      </tbody>
    </table>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    students: ownProps.campusStudents || state.students,
    campi: state.campi,
  };

};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleClick (evt) {
      evt.preventDefault();
      const campus = evt.target.studentCampus.value;
      const newStudent = {
        name: evt.target.studentName.value,
        email: evt.target.studentEmail.value,
        campusId: Number(campus)
      }


      dispatch(postStudent(newStudent, ownProps.history, campus));
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Students));

