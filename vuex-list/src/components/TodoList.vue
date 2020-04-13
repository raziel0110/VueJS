<template>
    <div>
        <todo v-for="(todo,i) in $store.state.todos" :key="i" :todo="todo"></todo>
    </div>
</template>

<script>
    import Todo from "./Todo";

    import {mapGetters} from 'vuex';

    export default {
        name: "TodoList",
        components: {
            Todo
        },
        computed: {
            ...mapGetters({
                todos: 'getAllTodos',
                count: 'contCompleted'
            })
        }
    }
</script>

<style scoped>

</style>