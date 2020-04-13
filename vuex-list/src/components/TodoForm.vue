<template>
    <div>
        <input type="text" v-model="newTodo"/>
        <button @click="addNewTodoItem()">Submit</button>
    </div>
</template>

<script>
    export default {
        name: "TodoForm.vue",
        data() {
            return {
                newTodo: null
            }
        },
        methods: {
            addNewTodoItem() {
                this.$store.dispatch('addNewTodo', this.newTodo);
                this.newTodo = null;
            }
        }
    }
</script>

<style scoped>

</style>