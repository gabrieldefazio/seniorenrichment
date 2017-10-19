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
      }).catch();
  };

}

export function fetchStudent(studentId) {

  return function thunk (dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(students => {
        const action = getStudent(students);
        dispatch(action);
      }).catch();
  };

}

export function postStudent (student, history, campusId) {

  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudent(newStudent));
        history.push(`/campi/${campusId}`);
      });
  };
}
// REDUCER

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENT:
        return [...state.students, action.student];

    case GET_STUDENTS:
        return action.students;

    default:
      return state;
  }
}
