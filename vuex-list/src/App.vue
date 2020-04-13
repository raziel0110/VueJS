<template>
    <div id="app">
        <h2>TODO</h2>
        <h6>Completed tasks: {{countCompleted}}, Remaining tasks: {{uncompleted}}</h6>
        <todo-form/>
        <todo-list/>
    </div>
</template>

<script>
    import TodoList from "./components/TodoList";
    import TodoForm from "./components/TodoForm";
    import {mapGetters} from 'vuex';

    export default {
        name: 'App',
        components: {
            TodoList,
            TodoForm
        },
        computed: mapGetters(['countCompleted', 'uncompleted'])
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
