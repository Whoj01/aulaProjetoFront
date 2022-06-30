<template>
   <div>
        <navbar/>
        <categorias/>
   </div>
    
    
</template>

<script>
 import navbar from '../components/navbar.vue'
 import categorias from '../components/categorias.vue'
export default {
    components: {
        navbar,
        categorias
    }
}
</script>