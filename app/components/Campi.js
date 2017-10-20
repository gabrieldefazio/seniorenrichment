import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { deleteCampus } from '../store/index'

function Campi (props) {
  const { campi, handleDeleteClick } = props;
  const divStyle = {
    position: "absolute"
  }

  return(
    <div>
      <h1>CAMPI</h1>
      {
        campi.map(campus => {
            return (
              <div className="col-xs-4" key={campus.id}>
                <button style={divStyle} className="btn" name="campusDelete" id={campus.id} onClick={handleDeleteClick}>×</button>
                <NavLink className="thumbnail" to={`/campi/${campus.id}`}>
                  <img src={campus.image} />
                  <div className="caption">
                    <h5><span>{campus.name}</span></h5>
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

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleDeleteClick(e){
      const deleteCampusThunk = deleteCampus(e.target.id, ownProps.history)
      store.dispatch(deleteCampusThunk)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campi));
