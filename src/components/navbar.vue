<template>
  <nav class="nav">
    <ul class="menu">
         <li><router-link to="/"> Home</router-link></li> 
         <li><router-link to="/produtos"> Produtos </router-link></li> 
         <li><router-link to="/categorias"> Categorias </router-link></li>  
    </ul>
  </nav>
</template>

<style>
  ul {
    list-style: none;
  }

  li {
     transition: all ease 1s;
  }

  li:hover{
     transform: scale(1.1);
  }

  .router-link-active {
    position: relative;
    animation: color 1s forwards;
  }

  .nav {
    width: 100%;
    height: 2.5rem;
    display: fixed;
    background: #353a40;
  }

  .nav .menu li a {
    color: #ffff;
    font-size: 0.8rem;
    font-weight: 400;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
  }

  .nav .menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .router-link-active::before{
  content: '';
  height: 1px;
  width: 0%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: red;
  animation-name: active;
  animation-duration: 1s;
  
   animation-fill-mode: forwards;
}

@keyframes active {
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}

@keyframes color{
    from {
        color: #ffff
    }

    to {
        color: red;
    }
}
</style>

<script>

    
export default {
    data(){
        return {
           
        }
    },
    
    name: 'navbar'
}
</script>