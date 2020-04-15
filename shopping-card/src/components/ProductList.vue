<template>
    <div class="d-flex align-items-stretch flex-wrap">
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
    </div>
</template>

<script>
    import ProductCard from "./ProductCard";
    export default {
        name: "ProductList",
        components: {
            ProductCard
        },
        mounted() {
            this.$store.dispatch('getProducts');
        }
    }
</script>

<style scoped>

</style>