<template>

 <div class="cards">
        <div class="card">
            <h5 class="card-title">Criar produto</h5>
            <form @submit.prevent="createProduto">
              <div >
                <div class="flex">
                   <label for="nome">Nome do produto: </label>
                   <input id="nome" type="text" placeholder="Nome do produto" v-model="nomeProduto">
                </div>
                <div class="flex">
                    <label for="stock">Quantidade em stock: </label>
                   <input type="text"  id="stock" placeholder="Quantidade em stock" v-model="stockProduto"> 
                </div>
                <div class="flex">
                    <label for="preco">Preço do produto: </label>
                   <input type="text" id="preco" placeholder="Preço do produto" v-model="precoProduto">  
                </div>
                <div class="flex">  
                  <label for="option">Categoria do produto: </label>
                  <select v-model="selected" id="option">
                    <option value="" disabled selected>Selecione sua categoria</option>
                    <option v-for="cat in categorias" :key="cat.id" :value="cat.id">{{cat.nome}}</option>
                  </select>
                </div>
              </div>
              
             
              <div class="flex">
                 <button class='link' type="submit">Cria novo Produto</button>
                 <button class="link cancel"><router-link to="/">Voltar</router-link></button>
              </div>
            </form>   
        </div>
    </div>
    
</template>

<style scoped>

.link.cancel {
    background: rgba(234, 76, 76, 0.686);
  }
 
 .flex{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
 }

 .card input {
    padding: 0.8rem .5rem;
    outline: none;
    border: 2px solid #3485FF;
    border-radius: 0.8rem;
    margin-bottom: 1.5rem;
    margin-left: 1rem;
    
  }

 form select {
  padding: 0.8rem .5rem;
  outline: none;
  border: 2px solid #3485FF;
  border-radius: 0.8rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
}
</style>

<script>
import router from "@/router";
export default {

    data(){
        return {
          categorias: [],
          nomeProduto: '',
          selected: '',
          stockProduto: 0,
          precoProduto: 0,
        }
    },

    name: 'formProduto',

    created(){
      this.getCat()
    },

    methods: {
        getCat(){
              fetch("http://localhost:8000/api/categoria")
              .then((response) => response.json())
              .then((r) => {
                this.categorias = r;
              })
        },

        createProduto(){
            if(this.nomeProduto === '' && this.stockProduto === 0 && this.precoProduto === 0){
                return
            }
            fetch("http://localhost:8000/api/produto", {
               method: 'POST',
               body: JSON.stringify({
                nome: this.nomeProduto,
                stock: this.stockProduto,
                preco: this.precoProduto,
                categoria_id: this.selected
               }),
               headers: {
                "Content-Type": "apllication/json"
               }
            })
            .then(() => {
              router.push('/produtos')
            })
            .finally(() => {
                alert('Produto criado com sucesso')
            })
        }
    }
}
</script>