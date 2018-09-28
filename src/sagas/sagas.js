import firebase from 'firebase/app';
import 'firebase/firestore';
import {put,take,call, all,takeLatest, fork,takeEvery} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {browserHistory} from 'react-router';
import * as UserActionTypes from '../actiontypes/user';

const config = {
    apiKey: "AIzaSyBlrYl7suPhBaAD2VMx9Yf90ezy9DPxSgU",
    authDomain: "agency-leroy-app.firebaseapp.com",
    projectId: "agency-leroy-app",
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

db.collection("users").doc("admin").set({
        username: "admin",
        password: "123"
    })
    .then(function () {
        console.log("Document successfully written!");
    })
    .catch(function (error) {
        console.error("Error writing document: ", error);
    });


function checkAuthentication(user) {
    let userToCheck = db.collection("users").doc(user.username);
    return userToCheck.get()
}

function* loginWatcher() {
    yield takeLatest(UserActionTypes.LOGIN_REQUESTING, loginWorker);
}

function* loginWorker(user) {
    try {
        var response = yield call(checkAuthentication, user);
        if (response.data().username != null) {
            sessionStorage.setItem("user", response.data().username)
            yield put({ type: UserActionTypes.LOGIN , response})
        } else{
            yield put({ type: UserActionTypes.LOGOUT })
            sessionStorage.clear('user');
        }
    } catch (error) {
        yield put({ type: UserActionTypes.LOGOUT })
        sessionStorage.clear('user');
    }
}

function* logoutWatcher() {
    yield takeLatest(UserActionTypes.LOGOUT_REQUESTING, logoutWorker);
}

function* logoutWorker() {
    yield put({ type: UserActionTypes.LOGOUT })
    sessionStorage.clear('user');
}

function* incrementWatcher() {
    yield takeLatest(UserActionTypes.UPDATE_INCREMENT, incrementWorker);
}

function* incrementWorker() {
    yield put({ type: UserActionTypes.INCREMENT })
}

function* decrementWatcher() {
    yield takeLatest(UserActionTypes.UPDATE_DECREMENT, decrementWorker);
}

function* decrementWorker() {
    yield put({ type: UserActionTypes.DECREMENT })
}


export default function* rootSaga() {
    yield all([
        loginWatcher(),
        incrementWatcher(),
        decrementWatcher(),
        logoutWatcher()
      ])
 }