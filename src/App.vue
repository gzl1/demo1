<template>
  <div id="app">
    <Add></Add>
    <Body></Body>
    <Fin></Fin>
    <Dh></Dh>
    <router-view></router-view>
  </div>
</template>
<script>
import Add from "./views/Add.vue"
import Body from "./views/Body.vue"
import Fin from "./views/Fin.vue"
import Dh from "./views/D.vue"
export default{
    components: { Add,Body,Fin,Dh }
}
</script>
<style lang="scss">

</style>
