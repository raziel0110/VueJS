<template>
    <div class="dropdown-menu p-2" style="min-width: 320px; right:0; left: auto" aria-labelledby="triggerId">
        <div>
            <div class="p-2 d-flex justify-content-between">
                <div >
                    <strong> Product title</strong>
                    <br/>1x23$
                </div>
                <div>
                    <a href="#" class="badge badge-secondary">remove</a>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between">
            <span>
               Total price: $23
            </span>
            <a href="#">Clear cart</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MiniCart"
    }
</script>

<style scoped>

</style>