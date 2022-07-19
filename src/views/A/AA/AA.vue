<template>
  <div class="daohang">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">巨人</a>
        <a href="#" class="btn btn-primary">{{$route.query.id}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  data() {
    return {

    };
  },
  mounted(){
    console.log(this.$route)
  }
};
</script>

<style lang="scss" scoped>
.daohang {
  margin: 20px;
}
</style>