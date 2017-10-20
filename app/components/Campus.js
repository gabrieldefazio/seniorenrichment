import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import Students from "./Students"



function Campus (props) {
  const campusId = Number(props.match.params.campusId);
  const campus = props.campi.filter(campus => campus.id === campusId)[0];
  const divStyle = {
    position: "absolute"
  }

  return (
    <div className="campus">
      <div>
        <span>
        </span>
        <h3>{ campus.hasOwnProperty('id') && campus.name }</h3>
        <h4><NavLink style={divStyle} className="btn" to={`/new-campus/${campusId}`}>update campus</NavLink></h4>
        <img src={ campus.hasOwnProperty('id') && campus.image } className="img-thumbnail" />
      </div>
      <Students />
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    campi: state.campi,
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(Campus));
