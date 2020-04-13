import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: 'todo item a',
                completed: false
            },
            {
                title: 'todo item b',
                completed: false
            }

        ]
    },
    getters: {
        getAllTodos: state => state.todos,
        countCompleted: state => {
            return state.todos.filter(todo => todo.completed === true).length
        },
        uncompleted: state => {
            return state.todos.filter(todo => todo.completed === false).length;
        }
    },
    mutations: {
        NEW_TODO(state, todo) {
            state.todos.push({
                title: todo,
                completed: false
            });
        },
        DELETE_TODO(state, todoItem) {
            const index = state.todos.indexOf(todoItem);
            state.todos.splice(index, 1);
        },
        UPDATE_TODO(state, todo) {
            todo.completed = !todo.completed;
        }
    },
    actions: {
        addNewTodo({commit}, todo) {
            commit('NEW_TODO', todo);
        },
        deleteTodo({commit}, todo) {
            commit('DELETE_TODO', todo)
        },
        updateTodo({commit}, todo) {
            commit('UPDATE_TODO', todo)
        }
    },
    modules: {}
})
