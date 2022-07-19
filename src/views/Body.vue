<template>
  <div class="body">
    <transition-group name="a">
      <div 
        class="input-group mb-3"
        v-for="item in values"
        :key="item.id"
      >
        <div class="input-group-text">
          <input
            @click="item.isF = !item.isF"
            class="form-check-input mt-0"
            type="checkbox"
            value
            aria-label="Checkbox for following text input"
          />
        </div>
        <input :value="item.title" type="text" class="form-control" aria-label="Text input with checkbox" />
        <button @click="rel(item.isF,item.id)" type="button" class="btn btn-primary">删除</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data(){
    return{
      values:JSON.parse(localStorage.getItem("todo"))||[],
    }
  },
  mounted(){
    this.$bus.$on("aa",res=>{
      var obj = {}
      obj.id = this.values.length+1
      obj.title = res,
      obj.isF = false
      this.values.push(obj)
    })
  },
  beforeDestroy(){
  
  },
  watch:{
    values:{
      immediate:true,
      deep:true,
      handler(a,b){
        localStorage.setItem("todo",JSON.stringify(a))
        this.$bus.$emit("bb",this.values)
      }
    }
  },
  methods:{
    rel(a,b){
      if(!a){
        var s = confirm("还未完成！确定要删除?")
        if(s){
          this.values = this.values.filter(item=>{
            return item.id !== b
          })
        }
      }else{
        this.values = this.values.filter(item=>{
          return item.id !== b
        })
      }
    }
  }
};
</script>

<style lang="scss">
.body{
  margin: 20px;
  .a-enter{
    opacity: 0;
  }
  .a-enter-to{
    opacity: 1;
  }
  .a-enter-active,.a-leave.active{
    transition: 3s all;
  }
  .a-leave{
    opacity: 1;
  }
  .a-leave-to{
    opacity: 0;
  }
}
</style>