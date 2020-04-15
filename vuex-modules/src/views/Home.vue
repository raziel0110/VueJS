<template>
    <div class="home">
        How many clicks? Yep there is {{ clicksA }} clicks
        <p>And in the second module? There are {{ clickB }} clicks.</p>

        <div>
            <div>
                <button @click="incrementA">increment(moduleA)</button>
                <button @click="decrementA">decrement(moduleA)</button>
            </div>
            <div>
                <button @click="incrementB">increment(moduleB)</button>
                <button @click="decrementB">decrement(moduleB)</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'Home',
        components: {},

        computed: {
            clicksA() {
                return this.$store.state.moduleA.click
            },
            clickB() {
                return this.$store.state.b.click
            }
        },
        methods: {
            incrementA() {
                this.$store.dispatch('moduleA/increment');
            },
            decrementA() {
              this.$store.dispatch('moduleA/decrement')
            },
            incrementB() {
                this.$store.dispatch('b/increment')
            },
            decrementB() {
                this.$store.dispatch('b/decrementFromModuleB');
            }
        }
    }
</script>
