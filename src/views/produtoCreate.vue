<template>
    <navbar/>
    <div class="container">
        <formProduto/>
    </div>
</template>

<script>
import formProduto from '../components/formProduto.vue'
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar,
        formProduto
    }
}
</script>