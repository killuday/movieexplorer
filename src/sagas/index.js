import { delay,call,all,put,takeEvery,takeLatest } from "@redux-saga/effects";
import { fetchedSearchMovies } from "../components/redux/search";

function* fetchedSearchMovies(action){
    yield delay(500)


    yield put(
       fetchedSearchMovies(yield call())
    )

}