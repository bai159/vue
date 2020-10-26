<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <p>
      <button @click="isShow = !isShow">显示{{isShow ? '组件通信' : '插槽'}}页面</button>
    </p>
    <communication msg="Welcome to Your Vue.js App" v-if="isShow"/>
    <!-- <slots v-else></slots> -->
    <kForm v-else></kForm>
  </div>
</template>

<script>
import communication from './components/communication/index.vue'
// import slots from '@/components/slots/index.vue'
import kForm from '@/components/form/index.vue'
export default {
  name: 'App',
  data() {
    return {
      isShow: true
    }
  },
  components: {
    communication,
    // slots,
    kForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
