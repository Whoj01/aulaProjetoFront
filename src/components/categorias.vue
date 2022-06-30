<template>
    <div class="container">
        <div class="cards">
            <div class="card flex" >
               <h5 class="card-title">cadastro de categorias</h5>
               <table>
                <p v-if="categorias.length === 0">Nenhuma categoria cadastrada</p>
                
                <tr v-else>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
                <tr v-for="cat in categorias" :key='cat.id'>
                    <td>{{cat.id}}</td>
                    <td>{{cat.nome}}</td>
                    <td>
                        <button @click="showEditModal(cat)" >Atualizar</button>
                        <button class="red" @click="showDeleteModal(cat.id)">Deletar</button>
                    </td>
                </tr>
               </table>
              <div class="margin">
               <button class="link"><router-link to="/categorias/novo">Criar nova categoria</router-link></button>
              </div>
            </div>
        </div>

    <div class="modal-wrapper change" v-if="editModal.show">
      <div class="modal">
        <h2>Editar categoria</h2>
        <p>Tem certeza que deseja editar essa categoria?</p>

        <form @submit.prevent="updateCat">
          
          <input type="text"  placeholder="Nome" v-model="edit_name" />

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

        <form @submit.prevent="deleteCat">
          
          <div class="buttons">
            <div v-on:click="deleteModal.show = false">Cancelar</div>
            <button class="delete" type="submit">Sim, excluir</button>
          </div>
        </form>
      </div>
    </div>
    </div>
</template>

<style>

 .flex {
  display: flex;
  align-items: center;
  justify-content: center;
 }

 .margin{
  margin-top: 1rem;
 }


  td {
    padding: 0 .8rem;
    margin-right: 1rem;
  }

  td button {
    border: none;
    background: #e5eaf1;
    margin-right: .5rem;
    padding: .2rem .2rem;
    border-radius: .3rem;
  }

  td button.red {
    background: rgba(240, 69, 69, 0.618);
  }

  .modal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(10, 27, 55, 0.8);
}

.modal-wrapper.change .modal {
  padding: 4rem;
}

.modal-wrapper .modal {
  width: min(59rem, 90%);
  background: #ffff;
  margin: auto;
  border-radius: 0.8rem;
  text-align: center;
  padding: 4rem;
}
.modal-wrapper .modal h2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 1.2rem;
  color: #0d114f;
}
.modal-wrapper .modal p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  color: #4d5e77;
  margin-bottom: 2.4rem;
}
.modal-wrapper .modal form input {
  background: #ffff;
  border: 0.2rem solid #3485ff;
  margin-bottom: 4rem;
  width: min(70%, 30.2rem);
  padding: 1.3rem 1.6rem;
  outline: none;
}
.modal-wrapper .modal .buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}
.modal-wrapper .modal .buttons button {
  padding: 0.81rem 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  border-radius: 6px;
  font-size: 1rem;
  background: rgba(128, 128, 128, 0.689);
  color: white;
  transition: 0.4s;
  cursor: pointer;
  border: none;
}
.modal-wrapper .modal .buttons button:hover {
  filter: brightness(1.2);
}
.modal-wrapper .modal .buttons div {
  margin-right: 2rem;
  background: #e5eaf1;
  padding: 0.81rem 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
}
.modal-wrapper .modal .buttons div:hover {
  filter: brightness(0.8);
}

.modal-wrapper .modal .buttons .delete {
    background: rgba(240, 69, 69, 0.618);
}
</style>

<script>
export default {
    
    data(){
        return {
            categorias: [],
            editModal: {
                id: 0,
                show: false
            },
            edit_name: '',
            deleteModal: {
                id: 0,
                show: false
            }
        }
    },

    created(){
       this.getCat()
    },


    methods: {
        showDeleteModal(id){
            this.deleteModal.id = id
            this.deleteModal.show = true
        },

        showEditModal(cat){
            this.edit_name = cat.nome
            this.editModal.id = cat.id
            this.editModal.show = true
        },

        deleteCat(){
            fetch('http://localhost:8000/api/categorias/' + this.deleteModal.id, {
              method: 'DELETE',
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then(() => {
                 this.getCat()
            })
            .finally(() => {   
                this.deleteModal.show = false
            })
        },

        updateCat(){
           fetch('http://localhost:8000/api/categorias/' + this.editModal.id, {
            method: 'PATCH',
            body: JSON.stringify({
                nome: this.edit_name
            }),
            headers: {"Content-Type": "application/json"}
           })
           .then(() => {
                this.getCat()
           })
           .finally(() => {
            this.editModal.show = false
           })
        },

        getCat(){
            fetch("http://localhost:8000/api/categoria")
        .then((response) => response.json())
        .then((r) => {
          
          this.categorias = r;
        });
        } 
    }
}
</script>