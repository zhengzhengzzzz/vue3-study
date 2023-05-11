import {
    createStore
} from 'vuex'
export default createStore({
    state: {
        counter: 0
    },
    mutations:{
     addCounter(state){
        state.counter++
     }
    },
    getters: {
        getCounter(state) {
            return state.counter > 0 ? state.counter : '数据异常 我爱子豪'
        }
    },

})