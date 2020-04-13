<template>
    <div id="app">
        <div v-for="post in posts">
            <p>{{post.title}}</p>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'App',
        created() {
            this.$store.dispatch('loadPost');

        },

        computed: {
            ...mapState([
                "posts"
            ])
        }
    }
</script>
<style>

</style>
