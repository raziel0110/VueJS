<template>
    <div class="card-container">
        <div class="card" v-for="character in characters">

            <h3>{{ character.name }}</h3>
            <router-link :to="{name: 'character', params: {id:character.id}}"> {{ character.name }}</router-link>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Characters",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                characters: state => state.characters
            })
        },
        created() {
            this.$store.dispatch('getCharacters');
        },
    };
</script>

<style lang="css">
    .card-container {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 30px;
    }
  .card {
    text-align: center;
    background-color: #333;
    min-height: 200px;
  }
</style>