<template>
    <div class="my-content">
        <h2>个人中心</h2>
        <div class="my-icon" >
            <img :src="userInfo.idcardpic">
        </div>
       <table >
           <tr>
               <td>用户识别码：</td>
               <td><input v-model="userInfo.clientname"  disabled> </td>
           </tr>
           <tr>
               <td>用户名：</td>
               <td><input v-model="userInfo.username"  disabled></td>
           </tr>
           <tr>
               <td>昵称:</td>
               <td><input v-model="userInfo.nickname"  disabled> </td>
           </tr>
           <tr>
               <td>性别：</td>
               <td><input v-model="userInfo.sex"  disabled></td>
           </tr>
           <tr>
               <td>出生日期：</td>
               <td><input v-model="userInfo.bday"  disabled> </td>
           </tr>
           <tr>
               <td>签名或自我介绍:</td>
               <td><input v-model="userInfo.introduce"  disabled></td>
           </tr>

           <tr>
               <td>联系手机：</td>
               <td><input v-model="userInfo.mobphone"  disabled> </td>
           </tr>
           <tr>
               <td>qq：</td>
               <td><input v-model="userInfo.qq"  disabled> </td>
           </tr>
           <tr>
               <td>身份证号码：</td>
               <td><input v-model="userInfo.idcard"  disabled>  </td>
           </tr>
           <tr>
               <td>真实姓名：</td>
               <td><input v-model="userInfo.truename"  disabled> </td>
           </tr>
       </table>

    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    name:"userInfo",
    data(){
        return {

        }
    },
    computed:mapState({
        userInfo:state=>state.userInfo
    }),
    created(){
            if(this.userInfo.sex==0){
                this.userInfo.sex="未知";
            }else{
                this.userInfo.sex==0?'男':'女';
            }    
    } 
}
</script>


<style scoped>
    
    .my-content{
        width:600px;
        height: auto;
        margin:0 auto;
    }
    .my-content>h2{
        margin-top: 20px;
        width: 100%;
        height: 60px;
        font-size: 24px;
        color: #606266;
        text-align: center;
    }

    .my-icon{
        padding-left: 240px;
        margin-bottom: 20px;
    }
    .my-content>div label{
         width:350px;
    }
    .my-content>table {
        font-size: 14px;
        color: #606266;

    }
     .my-content>table input{
        width:400px;
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    }
</style>
