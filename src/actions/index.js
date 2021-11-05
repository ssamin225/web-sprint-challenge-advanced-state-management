import axios from 'axios';
import { API_URL } from '../constants';
export const FETCH_START = 'FETCH_START';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const SET_ERROR = 'SET_ERROR';

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (input_data) => {
  return { type: FETCH_SUCCESS, payload: input_data };
};

export const fetchFail = (input_error) => {
  return { type: FETCH_FAIL, payload: input_error };
};

export const setError = (input_error) => {
  return { type: SET_ERROR, payload: input_error };
};

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchStart);
  axios
    .get(API_URL)
    .then((resp) => {
      dispatch(fetchSuccess(resp.data));
    })
    .catch((error) => {
      dispatch(fetchFail(JSON.stringify(error)));
    });
};

export const addSmurfs = (input_object) => (dispatch) => {
  axios
    .post(API_URL, input_object)
    .then((resp) => {
      dispatch(fetchSuccess(resp.data));
    })
    .catch((error) => {
      dispatch(setError(JSON.stringify(error)));
    });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.