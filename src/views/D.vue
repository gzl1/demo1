<template>
  <div class="daohang">
    <nav class="nav nav-pills">
        <router-link to="/a" class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">AAAAA</router-link>
        <router-link to="/b?id=111" class="flex-sm-fill text-sm-center nav-link active" href="#">BBBB</router-link>
        <router-link to="/c" class="flex-sm-fill text-sm-center nav-link active" href="#">CCCC</router-link>
        <router-link to="/d" class="flex-sm-fill text-sm-center nav-link active" href="#">DDDDD</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.daohang{
    margin: 20px;
}
</style>