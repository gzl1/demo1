<template>
  <div class="daohang">
    <nav class="nav nav-pills">
        <router-link 
          :to="{name:'aaa',query:{id:12,age:213}}" 
          class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">AAAAAAAAAAAA</router-link>
        <router-link 
          :to="{name:'aab',query:{id:12,age:213}}" 
          class="flex-sm-fill text-sm-center nav-link active" href="#">BBBBBBBBBBBB</router-link>
        <router-view></router-view>
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