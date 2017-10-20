import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { deleteStudent } from '../store/index'

function Students (props) {
  const { handleDeleteClick, campi } = props
  const campusId =  Number(props.match.params.campusId)
  const students = campusId ? props.students.filter(student => student.campusId === campusId ) : props.students;

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
              <td>
                <NavLink to={`/campi/${campi.filter(campus => student.campusId === campus.id)[0].id}`}>
                  { campi.filter(campus => student.campusId === campus.id)[0].name }</NavLink>

              </td>
              <td><NavLink to={`/new-student/${student.id}`} className="btn" >+</NavLink></td>
              <td><div className="btn" name="studentDelete"
                       title={campusId ? campi.filter(campus => student.campusId === campus.id)[0].id : null}
                       id={student.id} onClick={handleDeleteClick}>×</div>
              </td>
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
    students: state.students,
    campi: state.campi
  };

};
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleDeleteClick(e){
      const deleteStudentThunk = deleteStudent(e.target.id, e.target.title, ownProps.history)
      store.dispatch(deleteStudentThunk)
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Students));

