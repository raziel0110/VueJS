import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('SET_TODOS', response.data)
    },

    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('ADD_TODO', response.data)
    },

    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('REMOVE_TODO', id);
    },

    async filterTodos({commit}, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerHTML);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('SET_TODOS', response.data);
    },

    async updateTodo({commit}, updatedTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit('UPDATE_TODO', response.data);
    }
};

const mutations = {
    SET_TODOS: (state, todos) => {
        state.todos = todos;
    },

    ADD_TODO: (state, todo) => {
        state.todos.unshift(todo);
    },

    REMOVE_TODO: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id);
    },

    UPDATE_TODO:(state, newTodo) => {
        const index = state.todos.findIndex(todo => todo.id === newTodo.id);
        if(index !== -1) {
            state.todos.splice(index, 1, newTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}