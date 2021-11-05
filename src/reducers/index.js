import {
    FETCH_START,
    ADD_SMURFS,
    FETCH_SUCCESS,
    FETCH_FAIL,
    SET_ERROR,
  } from '../actions';

export const initialState = {
    arrayOfSmurfs: [],
    isLoading: false,
    errorString: '',
    isFetching: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return { ...state, isFetching: true };
      case FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          arrayOfSmurfs: [...action.payload],
        };
      case FETCH_FAIL:
      case ADD_SMURFS:
        return {
          ...state,
          arrayOfSmurfs: [...state.arrayOfSmurfs, action.payload],
        };
      case SET_ERROR:
        return { ...state, errorString: action.payload };
      default:
        return state;
    }
  };

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.