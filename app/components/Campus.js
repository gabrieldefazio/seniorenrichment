import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Students from "./Students"



function Campus (props) {

  const { students } = props;
  const { campus } = props;

  return (
    <div className="campus">
      <div>
        <h3>{ campus.hasOwnProperty('id') && campus.name }</h3>
        <img src={ campus.hasOwnProperty('id') && campus.image } className="img-thumbnail" />
      </div>
      <Students campusStudents={students}/>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  console.log('state of campus',state);

  const campusId = Number(ownProps.match.params.campusId);
  return {
    campus: state.campi.find(campus => campus.id === campusId),
    students: state.students.filter(student => student.campusId === campusId),
    campusId
  };
};

export default withRouter(connect(mapStateToProps)(Campus));
