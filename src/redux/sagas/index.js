import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {samuraiAPI} from "../../dal/api";
import {LOAD_USERS} from "../redusers/actionTypes";

// import {getError, isLoading, loadUsers} from "../redusers/actionCreators";

function* sagaWatcher() {
    yield takeEvery("start", sagaWorker)
}

function* sagaWorker() {
    console.log("Hello from sagas")
    const test = yield call(samuraiAPI.getUsers)
    console.log(test.data)
    yield put({type: LOAD_USERS, payload: test.data})

}

function* rootSaga() {
    yield call(sagaWatcher)
    // yield takeLatest("USER_FETCH_REQUESTED", fetchUser);


//         .then((res) => {
//             dispatch(loadUsers(res.data))
//             dispatch(isLoading(false))
//         })
//         .catch(error => {
//             dispatch(getError(error))
//             dispatch(isLoading(false))
}

export default rootSaga;