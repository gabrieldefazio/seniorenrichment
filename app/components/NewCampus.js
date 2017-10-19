import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { writeCampusName, writeCampusLocation, writeCampusImage, postCampus } from '../store/index';

function NewCampus (props) {

  const { handleSubmit, handleChangeName, handleChangeImage, handleChangeLocation,
          newCampusName, newCampusLocation, newCampusImage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Campus Name</label>
        <input
          value={newCampusName}
          onChange={handleChangeName}
          className="form-control"
          type="text"
          name="campusName"
          placeholder="Enter campus name"
        />
        <label htmlFor="name">Campus Location</label>
        <input
          value={newCampusLocation}
          onChange={handleChangeLocation}
          className="form-control"
          type="text"
          name="campusLocation"
          placeholder="Enter campus location"
        />
        <label htmlFor="name">Link to an Image of the Campus</label>
        <input
          value={newCampusImage}
          onChange={handleChangeImage}
          className="form-control"
          type="text"
          name="campusImage"
          placeholder="Enter the URL of the campus image"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Campus</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state) {
  return {
    newCampusName: state.newCampusName,
    newCampusLocation: state.newCampusLocation,
    newCampusImage: state.newCampusImage
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChangeName (evt) {
      dispatch(writeCampusName(evt.target.value));
    },
    handleChangeLocation (evt) {
      dispatch(writeCampusLocation(evt.target.value));
    },
    handleChangeImage (evt) {
      dispatch(writeCampusImage(evt.target.value));
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const newCampus = {
        name: evt.target.campusName.value,
        location: evt.target.campusLocation.value,
        image: evt.target.campusImage.value
    };
      dispatch(postCampus(newCampus, ownProps.history));
      dispatch(writeCampusLocation(''));
      dispatch(writeCampusName(''));
      dispatch(writeCampusImage(''));
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCampus));
