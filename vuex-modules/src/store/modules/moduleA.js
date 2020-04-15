const moduleA = {
    namespaced: true,
    state: {
        click: 10,
    },
    mutations: {
        increment(state) {
            state.click++
        },
        decrement(state) {
            state.click--;
        },
    },
    actions: {
        increment(context) {
            context.commit('increment');
        },
        decrement(context) {
            context.commit('decrement');
        },
    },

}

export default moduleA;