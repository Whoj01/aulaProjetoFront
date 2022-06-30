<template>
    <div class="container">
     <navbar/>
    <div class="cards">
        <div class="card">
            <form @submit.prevent="criarCategoria">
              <input type="text" placeholder="Nome da categoria" v-model="nomeCategoria">
              <div class="flex-normal">
                 <button class='link' type="submit">Cria nova categoria</button>
                 <button class="link cancel"><router-link to="/">Voltar</router-link></button>
              </div>
            </form>   
        </div>
    </div>
    </div>
</template>


<style >
  .card {
    width: 18rem;
    margin: 0;
    align-items: center;
  }

  .card input {
    padding: 0.8rem .5rem;
    outline: none;
    border: 2px solid #3485FF;
    border-radius: 0.8rem;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    
  }

  .link{
    cursor: pointer;
    
  }

  .flex-normal {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .link.cancel {
    background: rgba(234, 76, 76, 0.686);
  }
</style>

<script>
import router from "@/router";
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    },
    name: 'formCategoria',
    data(){
        return{
          nomeCategoria: '',
        }
    },

    methods: {
        
       criarCategoria(){
        if(this.nomeCategoria === ''){
            return alert('ensira algo para ser criado')
        }
         fetch('http://localhost:8000/api/categoria', {
            method: 'POST',
            body: JSON.stringify({
                nome: this.nomeCategoria
            }),
            headers: {
                "Content-Type": "application/json"
            }
         })
         .then(() => {
            router.push('/categorias')
         })
         .finally(() => {
          alert('categoria criada com sucesso')
         })
       }
    }
}

</script>