import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import appointmentReducer from './appointments/reducer';
import { AppointmentsStore } from './appointments/type';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GlobalState {
  appointmentsState: AppointmentsStore;
}

const combinedReducer = combineReducers<GlobalState>({
  appointmentsState: appointmentReducer,
});

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(combinedReducer, bindMiddleware([thunk]));

export default store;
