<template>
    <div class="add">
        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">请输入待办事项</span>
            <input @blur="cl()" v-model="message" type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        cl(){
            if(this.message == ""){
                alert("请输入内容！")
                return false
            }
            this.$bus.$emit("aa",this.message)
            this.message = ""
        }
    },
    mounted(){
        if(this.message == ""){
            return false
        }
        this.cl()
    }
}
</script>

<style lang="scss">
.add{
    margin:20px;
}

</style>