/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

/* Service */
import { CasinoMachineService } from '../../services';

/* Types */
import {
    POST_DATA_MACHINE,
} from './type';

function* postDataMachine(action) {
    try {
        const response = yield call(CasinoMachineService.examplePost, action.param, action.data);

        if (response.status === 200) {
            yield put({ type: POST_DATA_MACHINE.SUCCESS, response: response.data, message: response.message, status: response.status });
        }
    } catch (e) {
        yield put({ type: POST_DATA_MACHINE.FAILURE, message: e.response.message, status: e.response.status });
    }
}

export const casinoMachineSaga = [
    takeEvery(POST_DATA_MACHINE.REQUEST, postDataMachine),
];