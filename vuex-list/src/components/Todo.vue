<template>
    <div style="width: 250px; margin:5px auto">
        <div style="display: flex; justify-content: space-between">
            <span :class="{completed: todo.completed}" @click="setCompleted">{{todo.title}}</span>
            <button @click="deleteTodo">DEL</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todo.vue",
        props: ['todo'],
        methods: {
            deleteTodo() {
                this.$store.dispatch('deleteTodo', this.todo);
            },
            setCompleted() {
                this.$store.dispatch('updateTodo', this.todo);
            }

        }
    }
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>