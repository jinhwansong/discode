import { combineReducers } from 'redux';
import ServerReducer from './server';

const rootReducer = combineReducers({
  server: ServerReducer.reducer,
});

export default rootReducer;
