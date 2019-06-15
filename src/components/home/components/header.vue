<template>
    <div class="header">
        <div class="header_top">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
                <el-menu-item index="1"><router-link :to="{name:'index'}">首页</router-link></el-menu-item>
                <el-menu-item index="2" ><router-link :to="{name:'my'}" >个人信息</router-link></el-menu-item>
                <el-menu-item index="3" ><div @click="logOut">注销</div></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      logOut(){
          this.$store.dispatch("handleUserlogOut").then(()=>{
                this.$router.push("/");
          });
        
      }
    }
  
}
</script>

<style scoped>
    .header{
        height: 60px;
       background-color: rgb(84, 92, 100) ;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
 
    .userInfo{
        width: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>