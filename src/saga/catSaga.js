import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getCatApi } from '../api/api'
import { GET_CAT_IMG, GET_CAT, CAT_LOADING} from '../slices/catReducer'


function* fetchCat() {
    try {
        yield put(CAT_LOADING())
        const res = yield call(getCatApi)
        const url = res.data[0].url
        yield put(GET_CAT_IMG(url))
        // console.log(cat)
    } catch (error) {
        console.log(error)
    }
}

export function* mySaga() {
    yield takeLatest(GET_CAT.type, fetchCat);
}