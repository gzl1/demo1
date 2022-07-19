<template>
  <div class="daohang">
    <nav class="nav nav-pills">
        <a class="flex-sm-fill text-sm-center nav-link active" href="#"> B</a>
        <a class="flex-sm-fill text-sm-center nav-link active" href="#">
          {{$route.query.id}}
        </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
    console.log(this.$route)
  }
};
</script>

<style lang="scss" scoped>
.daohang{
    margin: 20px;
}
</style>