import axios from 'axios';

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

// ACTION CREATORS
export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

// THUNK CREATORS
export function fetchStudents() {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      }).catch(console.log);
  };

}
//
// export function postChannel (campus, history) {
//
//   return function thunk (dispatch) {
//     return axios.post('/api/campus', campus)
//       .then(res => res.data)
//       .then(newCampus => {
//         dispatch(getCampus(newCampus));
//         // history.push(`/campus/${newCampus.id}`);
//       });
//   };
// }

// REDUCER

export default function reducer (state = {}, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {

    case GET_STUDENT:
        return nextState.student = action.student;

    case GET_STUDENTS:
        return nextState.students = action.students;

    default:
      return state;
  }
}
