<template>
    <div class="col-3 mt-3">
        <div class="card h-100 text-left">
            <img src="https://via.placeholder.com/150x100" class="w-100">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="{name: 'product', params:{id:23}}">Product title</router-link>
                </h4>
                <strong>23$</strong>
                <p class="card-text">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="px-4 pb-3">
                <button class="btn btn-secondary">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductCard"
    }
</script>

<style scoped>

</style>