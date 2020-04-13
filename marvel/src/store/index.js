import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import apiKey from "../marvel";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characters: [],
        character: {},
        url: ''
    },
    mutations: {
        getCharacters(state) {
            axios
                .get(`http://gateway.marvel.com/v1/public/characters?apikey=${apiKey.public_key}`)
                .then(response => {
                    if (response.data && response.data.data && response.data.data.results) {
                        state.characters = response.data.data.results;
                        console.log(state.characters);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },

        getCharacter(state, id) {

            axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${apiKey.public_key}`)
                .then(response => {
                    if (response.data.data.results) {
                        state.character = response.data.data.results[0];
                        console.log(state.character);
                        state.url = `${state.character.thumbnail.path}`;
                        console.log(state.url);
                    }
                })
                .catch(err => console.log(err));
        }
    },
    actions: {
        getCharacters: context => {
            context.commit('getCharacters');
        },

        getCharacter: (context, id) => {
            context.commit('getCharacter', id);
        }


    },
    modules: {}
})
