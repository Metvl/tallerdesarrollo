<template>
  <nav class="navigation">
      <div class="logo">
          <img class="escudo" src="../assets/escudo.png" alt="escudo ubb">
      </div>
      <div>
          <a class="opcion activa" href="#">Crear</a>
          <a class="opcion" href="#">Cerrar Sesión</a>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
html,body{
    font-family: Ubuntu,'Helvetica Neue';
    margin: 0px;
    padding: 0px;
    max-height: 1080px;
    max-width: 1920px;
    width: 100%;
}
.navigation{
    top: 0;
    position: sticky;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    background: #428BCA;
}
.escudo{
    /* falta arreglar que la imagen no sobrepase el div */
    height: 75px;
}
.opcion{
    text-decoration: none;
    color: #FFFFFF;
    margin: 0 15px;
    font-size: 16px;
    font-weight: normal;
}
.activa{
    border-bottom: 3px solid #FD7E14;
}

</style>