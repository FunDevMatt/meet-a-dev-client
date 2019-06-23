import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        socket: '',
        nspSocket: ''
    },
    mutations: {
        updateSocket(state, payLoad) {
            state.socket = payLoad
        },
        updateNspSocket(state, payLoad) {
            state.nspSocket = payLoad;
        }
    }
})

export default store