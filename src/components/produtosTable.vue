<template>
    <div class="cards">
        <div class="card flex">
            <h5 class="card-title">Cadastro de produtos</h5>
            <p v-if="produtos.length === 0 " >Nenhum produto cadastrado</p>
            <table v-else>
                <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Estoque</th>
                <th>Preço</th>
                <th>categoria</th>
                <th>Id da categoria</th>
                <th>Ações</th>
                </tr>
                <tr v-for="produto in produtos" :key="produto.key">
                    <td>{{produto.id}}</td>
                    <td>{{produto.nome}}</td>
                    <td>{{produto.stock}}</td>
                    <td>{{produto.preco}}</td>
                    <td>{{categorias.find(x => x.id === produto.categoria_id).nome}}</td>
                    <td>{{produto.categoria_id}}</td>
                    <td> 
                        <button @click="showEditModal(produto)" >Atualizar</button>
                        <button class="red" @click="showDeleteModal(produto.id)">Deletar</button>
                    </td>
                </tr>
            </table>

            <div class="margin">
               <button class="link"><router-link to="/produto/novo">Criar novo produto</router-link></button>
            </div>


        </div>
    </div>

    <div class="modal-wrapper change" v-if="editModal.show">
      <div class="modal">
        <h2>Editar produto</h2>
        <p>Tem certeza que deseja editar esse produto?</p>

        <form @submit.prevent="updateProduct">
        <div>
          <label for="nome">Nome: </label> 
          <input type="text" id="nome" placeholder="Nome" v-model="edit_name" />
        </div>
         <div >
          <label for="stock">Stock: </label>
          <input type="text"  id="stock" placeholder="Stock" v-model="edit_stock" />
         </div>
         <div >
         <label for="preco">Preço: </label>
          <input type="text" id="preco"  placeholder="Preço" v-model="edit_preco" />
         </div>
         <div >
          <label for="categoria">Categoria: </label>
          <select v-model="selected" id="categoria" >
                <option v-for="cat in categorias" :key="cat.id" :value="cat.id">{{cat.nome}}</option>
          </select>
         </div>
          <div class="buttons">
            <div v-on:click="editModal.show = false">Cancelar</div>
            <button type="submit">Sim, editar</button>
          </div>
        </form>
      </div>
    </div>

    <div class="modal-wrapper" v-if="deleteModal.show">
      <div class="modal">
        <h2>Excluir categoria</h2>
        <p>Tem certeza que deseja excluir essa categoria?</p>

        <form @submit.prevent="deleteProduct">
          
          <div class="buttons">
            <div v-on:click="deleteModal.show = false">Cancelar</div>
            <button class="delete" type="submit">Sim, excluir</button>
          </div>
        </form>
      </div>
    </div>
</template>

<style scoped> 

 .flex {
    gap: 1rem;
 }

 th {
    padding: .2rem .2rem ;
 }

 table {
    margin-bottom: 1rem;
 }

 td {
    padding: .5rem .2rem;
    text-align: center;
 }

p.margin {
    margin: 1rem 0;
}

.margin {
    margin: 0 auto;
}

.card-title {
    margin: 0 auto;
}
  

.modal-wrapper.change .modal {
  padding: 1rem;
}


.modal-wrapper .modal form input {
  background: #ffff;
  border: 0.2rem solid #3485ff;
  margin-bottom: 1rem;
  width: min(70%, 30.2rem);
  padding: 1.3rem 1.6rem;
  outline: none;
}

.modal-wrapper .modal form select {
  background: #ffff;
  border: 0.2rem solid #3485ff;
  margin-bottom: 1rem;
  width: min(70%, 30.2rem);
  padding: 1.3rem 1.6rem;
  outline: none;
  margin-right: 1.4rem;
}


</style>

<script>
export default {
    data(){
        return {
            categorias: [],
            produtos: [],
            selected: 0,
            edit_name: '',
            edit_stock: '',
            edit_preco: '',
            editModal: {
                id: 0,
                show: false
            },
            deleteModal: {
                id:0,
                show: false        
            }
                 
        }
    },

    name: 'produtosTable',

    created(){
       this.getCat()
       this.getProduct()
    },


    methods: {
        showDeleteModal(id){
           this.deleteModal.id = id
           this.deleteModal.show = true
        },

        deleteProduct(){
            fetch("http://localhost:8000/api/produto/" + this.deleteModal.id, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(() => {
                this.deleteModal.show = false
                this.getProduct()
            })
            .finally(() => {
                 setTimeout(() => {
                alert('produto deletado com sucesso')
            }, 1000)
            })
        },

        showEditModal(produto){
            this.edit_name = produto.nome
            this.edit_stock = produto.stock
            this.edit_preco = produto.preco
            this.editModal.id = produto.id
            this.selected = produto.categoria_id
            this.editModal.show = true
        },

        updateProduct(){
          fetch("http://localhost:8000/api/produto/" + this.editModal.id, {
            method: 'PATCH',
            body: JSON.stringify({
                nome: this.edit_name,
                stock: this.edit_stock,
                preco: this.edit_preco,
                categoria_id: this.selected
            }),
            headers: {
                "Content-Type": "application/json"
            }
          })
          .then(() => {
            this.getProduct() 
          })
          .then(() => {
            this.editModal.show = false     
          })
          .finally(() => {
            setTimeout(() => {
                alert('produto atualizado com sucesso')
            }, 1000)
            
          })
        },
        getCat(){
            fetch("http://localhost:8000/api/categoria")
            .then((response) => response.json())
            .then(r => {
             this.categorias = r;
             })
        },

         getProduct(){
            fetch("http://localhost:8000/api/produto")
            .then(response => response.json())
            .then(r => {
                this.produtos = r
            })
        },

        
    }
}
</script>