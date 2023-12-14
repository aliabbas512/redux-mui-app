import taskReducer from './taskReducer';
import { combineReducers } from 'redux';
//set up reducers

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;