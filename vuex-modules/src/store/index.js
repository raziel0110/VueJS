import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        click: 5
    },
    mutations: {},
    actions: {},
    modules: {
        moduleA: moduleA,
        b: moduleB
    }
})
