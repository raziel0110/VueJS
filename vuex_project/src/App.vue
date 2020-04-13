<template>
    <div id="app">
        <input-component></input-component>
        <h5>{{ notesCount }}</h5>
        <ul v-for="(note,i) in notes">
            <li>{{ note }} - {{timestamps[i]}}</li>
        </ul>
    </div>
</template>

<script>
    import Input from "./components/Input";
    import {mapGetters} from 'vuex';

    export default {
        name: "App",
        components: {
            'input-component': Input
        },
        computed: {
            ...mapGetters([
                'notes', 'timestamps', 'notesCount'
            ])
        }
    };
</script>

<style>
</style>
