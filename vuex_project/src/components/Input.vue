<template>
    <div>
        <input
                placeholder="Enter a note"
                v-model="input"
                @keyup.enter="monitorEnterKey"
                type="text"
        >
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Input.vue",
        data() {
            return {
                input: ''
            }
        },
        computed: {
            ...mapGetters([
                'notes',
                'timestamps'
            ]),
        },
        methods: {
            monitorEnterKey() {
                this.$store.dispatch('addNote', this.input);
                this.$store.dispatch('addTimestamps', new Date().toLocaleString());
                this.$store.dispatch('incrementNotesCount');
                this.input = '';
            }
        }
    }
</script>

<style scoped>

</style>