import {all} from 'redux-saga/effects';

import {
    loginWatcher,
    logoutWatcher,
    incrementWatcher,
    decrementWatcher
} from "./sagas"

export default function* rootSaga() {
    yield all([
        loginWatcher(),
        incrementWatcher(),
        decrementWatcher(),
        logoutWatcher()
      ])
 }