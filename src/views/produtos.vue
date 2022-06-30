<template>
    <div class="container">
        <navbar/>
        <produtoTable/>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import produtoTable from '../components/produtosTable.vue'

export default {
    components:{
        navbar,
        produtoTable

    }
}
</script>