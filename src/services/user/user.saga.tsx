import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { USER_SAVE_REQUEST, USER_REQUEST, userActions } from "./user.store";

const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api'
  : '/api'

function* saveNewUserSaga(action: any) {
  const fetch = () => axios.post(API_URL + '/user', { token: action.payload });
  try {
    yield call(fetch);
    yield put(userActions.newUserUpdate('OK'))
  } catch (error) {
    yield put(userActions.newUserUpdate('ERROR'))
  }
}

function* getUserSaga(action: any) {
  const fetch = () => axios.get(`${API_URL}/user?username=${action.payload}`);
  try {
    const { data } = yield call(fetch);
    yield put(userActions.userUpdate(data))
  } catch (error) {
    yield put(userActions.userUpdate({
      error: error.response.data.status
    }))
  }
}

export function* watchNewUserRequest() {
  yield takeLatest(USER_SAVE_REQUEST, saveNewUserSaga);
}

export function* watchGetUser() {
  yield takeLatest(USER_REQUEST, getUserSaga);
}