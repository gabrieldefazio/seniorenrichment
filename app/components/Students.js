import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
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
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Campus</th>
      </tr>
      </thead>
      <tbody>
      {
        students.map(student => (
          <tr key={student.id} >
            <td>
            <a href={`/students/${student.id}`} className="btn btn-sm">
              <span className="glyphicon glyphicon-eye-open"></span>
            </a>
            </td>
            <td>{ student.name }</td>
            <td>{ student.email }</td>
            <td>{ campi.filter(campus => student.campusId === campus.id)[0].name }</td>
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

export default withRouter(connect(mapStateToProps)(Students));

