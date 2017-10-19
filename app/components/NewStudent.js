import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { postStudent } from '../store/index';

function NewStudent (props) {

  const { handleSubmit, handleChangeName, handleChangeEmail, handleChangeCampus,
          newStudentName, newStudentEmail, newStudentCampus, campi } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Student Name</label>
        <input
          value={newStudentName}
          // onChange={handleChangeName}
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Enter student name"
        />
        <label htmlFor="name">Campus Email</label>
        <input
          value={newStudentEmail}
          // onChange={handleChangeEmail}
          className="form-control"
          type="text"
          name="studentEmail"
          placeholder="Enter student's email"
        />
        <label htmlFor="name">Current Campus</label>
        <select  value={newStudentCampus}
                 // onChange={handleChangeCampus}
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
        <button type="submit" className="btn btn-default">Create Student</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state) {
  return {
    campi: state.campi,
    students:state.campi
    // newStudentName: state.newStudentName,
    // newStudentEmail: state.newStudentEmail,
    // newStudentCampus: state.newStudentCampus,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit (evt) {
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
    //   dispatch(postStudent(newStudent, ownProps.history, campus));
    //   // dispatch(writeStudentName(''));
    //   // dispatch(writeStudentEmail(''));
    //   // dispatch(writeStudentCampus(''));
  //   // }
  // };


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudent));
