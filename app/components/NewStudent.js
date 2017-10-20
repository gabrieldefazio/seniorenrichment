import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { postStudent, putStudent } from '../store/index';

function NewStudent (props) {

  const { handleSubmitNew, handleSubmitUpdate, campi, students } = props;

  let studentId = Number(props.match.params.studentId)
  console.log(props)
  const updateStudent = students.filter(student => student.id === studentId)[0];
  console.log('XXX',updateStudent)
  const newStudent =  updateStudent ?
    {
      name: updateStudent.name,
      email:  updateStudent.email,
      campus: updateStudent.campusId
    }
    :
    {
      name: '',
      email: '',
      campus: ''
    }

  return (
    <form onSubmit={studentId ? handleSubmitUpdate : handleSubmitNew }>
      <div className="form-group">
        <label htmlFor="name">Student Name</label>
        <input
          defaultValue={newStudent.name}
          title={studentId}
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Enter student name"
        />
        <label htmlFor="name">Campus Email</label>
        <input
          defaultValue={newStudent.email}
          className="form-control"
          type="text"
          name="studentEmail"
          placeholder="Enter student's email"
        />
        <label htmlFor="name">Current Campus</label>
        <select  defaultValue={newStudent.campus}
                 className="form-control"
                 type="text"
                 name="studentCampus"
                 placeholder="Select student's campus">
          {
            campi.map(campus => (<option key={campus.id} value={campus.id}>{campus.name}</option>))
          }
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">{studentId ? "Update Student" : "Create Student" }</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    campi: state.campi,
    students: state.students
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmitNew (evt) {
      evt.preventDefault();
      const campus = evt.target.studentCampus.value;
      const newStudent = {
        name: evt.target.studentName.value,
        email: evt.target.studentEmail.value,
        campusId: Number(campus)
      }
      dispatch(postStudent(newStudent, ownProps.history, campus));
    },

    handleSubmitUpdate (evt) {
      evt.preventDefault();
      const campus = evt.target.studentCampus.value;
      const studentId = evt.target.studentName.title
      const newStudent = {
        name: evt.target.studentName.value,
        email: evt.target.studentEmail.value,
        campusId: Number(campus)
      }
      dispatch(putStudent(newStudent, ownProps.history, studentId, campus));
    }
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudent));
