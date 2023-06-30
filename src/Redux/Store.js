// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { Reducer } from "./Reducer";

// import thunk from "redux-thunk";
// import logger from "redux-logger";

// const rootreducer = combineReducers({user:Reducer})

// const Store = configureStore({reducer:rootreducer,middleware:[thunk,logger]})

// export default Store;

//---------------------------------------------------------------------------------

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { Reducer as userReducer } from "./Reducer";

// const rootReducer = combineReducers({ user: userReducer });

// const Store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk, logger],
//   devTools: true, // Enable Redux DevTools Extension
// });

// export default Store;
 

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Reducer as userReducer } from './Reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { useState } from 'react';

const rootReducer = combineReducers({ user: userReducer });

const middleware = [thunk, logger];

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  devTools: true // Enable Redux DevTools Extension
});

export default Store;





