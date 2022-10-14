import { combineReducers } from 'redux';
import { emailedReducer } from './emailed';
import { sharedReducer } from './shared';
import { viewedReducer } from './viewed';

const rootReducer = combineReducers({
  viewedReducer: viewedReducer,
  sharedReducer: sharedReducer,
  emailedReducer: emailedReducer
  //some more reducer will come
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
