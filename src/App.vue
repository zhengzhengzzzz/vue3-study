<template>
  <hello-world/>
  <router-link to="/">首页</router-link>|
  <router-link to="/about">关于</router-link>|
  <router-link to="/news">新闻</router-link>
  <router-view></router-view>
  <h2>{{  }}</h2>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      title:'我爱你',
      message:"",
    }
  },
  methods:{
    haoBaobao(data){
      alert(data)
      this.message = data
    }
  },
  // beforeCreate(){
  //   console.log("App",'beforeCreate:组件创建之前');
  // },
  // created(){
  //   console.log("App",'created:组件创建完成');
  // },
  // beforeMount(){
  //   console.log("App",'beforeMount:组件渲染之前');
  // },
  // mounted(){
  //   console.log("App",'mounted:组件渲染完成');
  // },
  // beforeUpdate(){
  //   console.log("App",'beforeUpdate:组件更新之前');
  // },
  // updated(){
  //   console.log("App",'updated:组件更新后');
  // },
  // beforeUnmount(){
  //   console.log("App",'beforeUnmount:组件卸载之前');
  // },
  // unmounted(){
  //   console.log("App",'unmounted:组件卸载完成');
  // }
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
