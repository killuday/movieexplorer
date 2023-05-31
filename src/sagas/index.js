import { delay,call,all,put,takeEvery,takeLatest } from "redux-saga/effects";
import { fetchedSearchMovies, searchMovies } from "../redux/search"; 
import { API_KEY } from "../config";
import TheMovieDBApi from "../lib/api";


const api =new TheMovieDBApi(API_KEY)

function* fetchSearchMovies(action){
    yield delay(500)


    yield put(
       fetchedSearchMovies(yield call(api.searchMovies,action.payload))
    )

}

export default function* watcherSaga(){
    yield all([
        yield takeLatest(searchMovies.type,fetchSearchMovies)
    ])
}