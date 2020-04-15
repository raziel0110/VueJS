const moduleB = {
    namespaced: true,
    state: {
        click: 11
    },
    mutations: {
        decrement(state) {
            state.click--;
        },
        increment(state) {
            state.click++;
        }
    },
    actions: {
        decrementFromModuleB(context) {
            context.commit('decrement');
        },
        increment(context) {
            context.commit('increment');
        }
    },
    getters: {}
}

export default moduleB;