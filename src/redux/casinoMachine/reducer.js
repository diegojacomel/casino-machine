// Types
import {
    POST_DATA_MACHINE,
} from './type';

const INITIAL_STATE = {
    casinoMachine: {
        data: [],
        message: null,
        status: null
    }
}

const casinoMachineReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_DATA_MACHINE.REQUEST:
            return {
                ...state,
                casinoMachine: INITIAL_STATE.casinoMachine
            }

        case POST_DATA_MACHINE.SUCCESS:
            return {
                ...state,
                casinoMachine: {
                    data: action.response,
                    message: action.message,
                    status: action.status
                }
            }

        case POST_DATA_MACHINE.FAILURE:
            return {
                ...state,
                casinoMachine: {
                    data: [],
                    message: action.message,
                    status: action.status
                }
            }

        case POST_DATA_MACHINE.RESET:
            return {
                ...state,
                casinoMachine: INITIAL_STATE.casinoMachine
            }

        default:
            return state

    }
}

export default casinoMachineReducer;