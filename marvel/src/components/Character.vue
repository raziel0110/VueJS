<template>
    <div class="">
        <h3>{{ character.name }}</h3>
        <p>{{ this.$route.params.id }}</p>
        <p v-if="character.description">{{ character.description}}</p>
        <p v-else>No description</p>

        <img :src="url">
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Character.vue",
        data() {
            return {
                size: 'standard_large.jpg',
                url: ''
            }
        },
        computed: {
            ...mapState({
                character: state => state.character,
                preUrl: state => state.url
            })
        },
        mounted() {
            this.$store.dispatch('getCharacter', this.$route.params.id);
            this.getImage();
        },
        methods: {
            getImage() {
                this.url = `${this.preUrl}/${this.size}`
            }
        }
    }
</script>

<style scoped>

</style>