// Api
import Api from '../utils/api';

class CasinoMachineService {
    static exampleGet(param) {
        return Api.get(`/api-example/${param}`)
    }

    static examplePost(param, data) {
        return Api.post(`/api-example/${param}`, data)
    }

    static examplePut(param, data) {
        return Api.put(`/api-example/${param}`, data)
    }

    static examplePatch(param, data) {
        return Api.patch(`/api-example/${param}`, data)
    }

    static exampleDelete(param) {
        return Api.delete(`/api-example/${param}`)
    }
}

export default CasinoMachineService;