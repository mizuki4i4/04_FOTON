<template>
  <v-app>
    <Usernav/>
    <div class="userpane-conteiner">
      <Userpane/>
    </div>
  </v-app>
</template>
<script>
  import Usernav from '../components/Usernav.vue'
  import Userpane from '../components/Userpane.vue'

  export default {
    components: {
      Usernav,
      Userpane
    }
  }
</script>
<style>
  .userpane-conteiner {
    margin-left: 0px !important;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
    display: flex;
  }

  .statuscard-wrap {
    height: 1000px;
    width: 400px;
    /* margin-left: 1310px; */
    background-color:white;
  }
</style>