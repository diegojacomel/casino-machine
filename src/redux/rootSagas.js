
// Modules
import { all } from 'redux-saga/effects';

// Saga
import { casinoMachineSaga } from './casinoMachine/saga';

function* rootSagas() {
    // here we initialize all the saga from different files
    yield all([
        ...casinoMachineSaga,
    ]);
}

export default rootSagas;