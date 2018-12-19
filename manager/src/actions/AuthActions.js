import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanegd = (text) => {
  return ({
    type: EMAIL_CHANGED,
    payLoad: text,
  });
}

export const passwordChanged = (text) => {
  return ({
    type: PASSWORD_CHANGED,
    payLoad: text,
  });
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => { loginUserSuccess(dispatch, user); })
      .catch((e) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => { loginUserSuccess(dispatch, user); })
          .catch((e) => {
            loginUserFail(dispatch);
          })
      });
  }
}

function loginUserSuccess(dispatch, user) {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payLoad: user,
  });

  Actions.main();
}

function loginUserFail(dispatch) {
  dispatch({
    type: LOGIN_USER_FAIL
  });
}