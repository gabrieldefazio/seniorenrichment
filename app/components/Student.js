import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Students from "./Students"


function Student (props) {
  const { student } = props


  return (
    <div className="card">
      <img src="https://i.pinimg.com/736x/19/44/a8/1944a8538980559a8c3ae656cd45af83--master-bedroom-bathroom-dream-bedroom.jpg.png" alt="Avatar"  />
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
    </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);

  return {
    // student: state.students.filter(student => student.id === studentId ),
    // campus: state.campi.find(campus=> campus.id === this.student.campusId)
  };
};

export default connect(mapStateToProps)(Student);
