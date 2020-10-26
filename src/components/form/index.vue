<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <KFormItem :label="'用户名：'" prop="username">
        <Kinput v-model="userInfo.username" placeholder="请输入用户名"></Kinput>
      </KFormItem>
      <KFormItem :label="'密码：'" prop="password">
        <Kinput
          v-model="userInfo.password"
          :type="'password'"
          placeholder="请输入密码"
        ></Kinput>
      </KFormItem>
      <KFormItem >
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KFormItem from "@/components/form/KFormItem";
import Kinput from "@/components/form/Kinput.vue";
import KForm from "@/components/form/KForm.vue";
export default {
  components: {
    Kinput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    login() {
        this.$refs.loginForm.validate(valid=>{
            if(valid){
                alert('submit');
            }else{
                console.log('err submit')
                return false;
            }
        })
    },
  },
};
</script>

<style  scoped>
</style>