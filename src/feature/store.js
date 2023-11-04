// import { combineReducers } from "redux";

import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './slice/tab';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['user', 'client', 'tab']
// }

const store = configureStore({
    reducer:{
        tab: tabReducer,
    }
    // archived: archivedReducer,
})

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false
//         })
// });

export default store;