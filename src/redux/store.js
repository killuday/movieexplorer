import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from './search'
import watcherSaga from "../sagas"
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleware= createSagaMiddleware();


const store= configureStore({
    reducer:{
        search:searchReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({thunk:false}).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga)

export default store;