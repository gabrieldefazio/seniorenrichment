import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Campi (props) {
  const { campi } = props;

  return(
    <div>
      <h1>CAMPI</h1>
      {
        campi.map(campus => {
            return (
              <div className="col-xs-4" key={campus.id}>
                <NavLink className="thumbnail" to={`/campi/${campus.id}`}>
                  <img src={campus.image} />
                  <div className="caption">
                    <h5>
                      <span>{campus.name}</span>
                    </h5>
                  </div>
                </NavLink>
              </div>)
          }
        )
      }
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campi: state.campi,
    students: state.students
  }
};

export default withRouter(connect(mapStateToProps)(Campi));
