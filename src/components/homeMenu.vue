<template>
    <div class="container">
        <navbar/>
         <div class="cards">
            <div class="card um">
                <h5 class="card-title">Cadastro de produtos</h5>
                <p class="card-text">aqui voce cadastra todos os seus produtos. Só não se esqueça de criar as categorias</p>
                <button class="link">
                 <router-link to="/produto/novo"> Cadastre seus produtos </router-link> 
                </button>
                 
            </div>

            <div class="card" >
                <h5 class="card-title">Cadastro de categorias</h5>
                <p class="card-text">aqui voce cadastra todas os seus categorias. Para poder vincular ao seu produto</p>
                <button class="link">
                    <router-link to="/categorias/novo">Cadastre sua categoria</router-link> 
                </button>
                
            </div>
        </div>
    </div>
</template>

<style>
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
 }

 body {
    padding: 2rem;
 }

 .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 0 2rem;
   
    background: #F0EBE3;
    min-height: 25vh;
    border-radius: 0 0 .8rem .8rem;
 }

 .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 5rem 2rem;
 }

 .card {
    min-width: 30%;
    display: flex;
    min-height: 50%;
    
    
    flex-direction: column;
    border: 2px solid rgb(0, 183, 255);
    padding: .8rem 1rem;
    background: #fff;
    border-radius: .8rem;
    align-items: flex-start;
    
 }



 .card.um {
    margin-right: 2rem;
 }

 .card-title {
    margin-bottom: .8rem;
 }

 .card-title {
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
 }

 .card-text {
    font-weight: 400;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: .8rem;
    margin-bottom: 1.5rem;
 }

.card-title,
.card-text {
    text-align: left;
}

.link {
    
    display: flex;
    color: #ffff;
    background: #3485FF;
    padding: .8rem 1rem;
    
    
    font-size: .8rem;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: .8rem;
    text-align: center;
    border: none;
   
}

.link a {
    color: #ffff;
}





</style>
<script>
import navbar from './navbar.vue'
export default {
    name: "homeComponent",
    components: {
        navbar
    },
    data(){
        return {

        }
    },

}
</script>