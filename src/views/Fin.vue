<template>
  <div class="fin">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p
          class="card-text"
        >一共有{{count}}条代办</p>
        <a href="#" class="btn btn-primary">完美</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      count:0
    }
  },
  mounted(){
    this.$bus.$on("bb",res=>{
      this.count = res.length
    })
  },
  beforeDestroy(){
  
  },
};
</script>

<style lang="scss">
.fin{
  margin: 20px;
  text-align: center;
  .card{
    width: 100%;
  }
}
</style>