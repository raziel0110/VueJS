import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [],
        timestamps: [],
        notesCount: 0
    },
    mutations: {
        ADD_NOTE(state, payload) {
            state.notes.push(payload);
        },

        ADD_TIMESTAMP(state, payload) {
            state.timestamps.push(payload);
        },

        NOTES_COUNT(state) {
          state.notesCount++;
        }
    },
    getters: {
        notes: state => state.notes,
        timestamps: state => state.timestamps,
        notesCount: state => state.notesCount
    },
    actions: {
        addNote(context, payload) {
            context.commit('ADD_NOTE', payload);
        },
        addTimestamps(context, payload) {
          context.commit('ADD_TIMESTAMP', payload);
        },
        incrementNotesCount(context) {
          context.commit('NOTES_COUNT');
        }

    },
    modules: {}
})
