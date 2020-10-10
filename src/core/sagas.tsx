import { watchNewUserRequest, watchGetUser } from "services/user/user.saga";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchNewUserRequest(),
    watchGetUser(),
  ]);
}
