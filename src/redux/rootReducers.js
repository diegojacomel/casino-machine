/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import casinoMachineReducer from './casinoMachine/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    casinoMachineReducer: casinoMachineReducer,
})

export default rootReducers;