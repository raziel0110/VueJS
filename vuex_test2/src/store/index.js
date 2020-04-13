import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        SET_POST(state,posts) {
            state.posts = posts;
        }
    },
    actions: {
        loadPost({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then( data => {
                    let posts = data.data;
                    commit('SET_POST', posts);
                })
                .catch(err => console.log(err));
        }
    },
    modules: {}
})
