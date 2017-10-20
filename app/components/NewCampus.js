import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postCampus, putCampus } from '../store/index';

function NewCampus (props) {
  const { handleSubmitNew, handleSubmitUpdate, campi } = props;

  let campusId = Number(props.match.params.campusId)
  const updateCampus = campusId ? campi.filter(campus => campus.id === campusId)[0] : undefined;

  const newCampus =  updateCampus ?
    {
      name: updateCampus.name,
      location:  updateCampus.location,
      image: updateCampus.image
    }
    :
    {
      name: '',
      location: '',
      image: ''
    }

  return (
    <form onSubmit={campusId ? handleSubmitUpdate : handleSubmitNew}>
      <div className="form-group">
        <label htmlFor="name">Campus Name</label>
        <input
          defaultValue={newCampus.name}
          title={campusId}
          className="form-control"
          type="text"
          name="campusName"
          placeholder="Enter campus name"
        />
        <label htmlFor="name">Campus Location</label>
        <input
          defaultValue={newCampus.location}
          className="form-control"
          type="text"
          name="campusLocation"
          placeholder="Enter campus location"
        />
        <label htmlFor="name">Link to an Image of the Campus</label>
        <input
          defaultValue={newCampus.image}
          className="form-control"
          type="text"
          name="campusImage"
          placeholder="Enter the URL of the campus image"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">{ campusId ? "Update Campus" : "Create Campus" }</button>
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
      const newCampus = {
        name: evt.target.campusName.value,
        location: evt.target.campusLocation.value,
        image: evt.target.campusImage.value
      };
      dispatch(postCampus(newCampus, ownProps.history));
    },

    handleSubmitUpdate(evt){
      evt.preventDefault();
      const updateCampus = {
        name: evt.target.campusName.value,
        location: evt.target.campusLocation.value,
        image: evt.target.campusImage.value
      };
      dispatch(putCampus(updateCampus, evt.target.campusName.title, ownProps.history));
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCampus));
