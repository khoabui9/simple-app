import firebase from 'firebase/app';
import 'firebase/firestore';
import {put,take,call, all,takeLatest, fork,takeEvery} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {browserHistory} from 'react-router';
import * as UserActionTypes from '../actiontypes/user';
import { push } from 'react-router-redux';

//firestore config
const config = {
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

// add initial data to db
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

// check if user is in db
function checkAuthentication(user) {
    let userToCheck = db.collection("users").doc(user);
    return userToCheck.get()
}

/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGIN_REQUESTING'
 */
export function* loginWatcher() {
    yield takeLatest(UserActionTypes.LOGIN_REQUESTING, loginWorker);
}

/** saga worker that is responsible for the side effects */
function* loginWorker(action) {
    try {
        var response = yield call(checkAuthentication, action.payload);

        if (response.data().username != null) { 
            console.log("alo")
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

/**
 * saga watcher that is triggered when dispatching action of type
 * 'LOGOUT_REQUESTING'
 */
export function* logoutWatcher() {
    yield takeLatest(UserActionTypes.LOGOUT_REQUESTING, logoutWorker);
}

function* logoutWorker() {
    yield put({ type: UserActionTypes.LOGOUT })
    sessionStorage.clear('user');
}

/**
 * saga watcher that is triggered when dispatching action of type
 * 'UPDATE_INCREMENT'
 */
export function* incrementWatcher() {
    yield takeLatest(UserActionTypes.UPDATE_INCREMENT, incrementWorker);
}

function* incrementWorker() {
    yield put({ type: UserActionTypes.INCREMENT })
}

/**
 * saga watcher that is triggered when dispatching action of type
 * 'UPDATE_DECREMENT'
 */
export function* decrementWatcher() {
    yield takeLatest(UserActionTypes.UPDATE_DECREMENT, decrementWorker);
}

function* decrementWorker() {
    yield put({ type: UserActionTypes.DECREMENT })
}