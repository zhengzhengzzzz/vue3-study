<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h1>{{ rawHtml }}</h1>
    <h1 v-html="rawHtml"></h1>
    <h1 :id="bindId">v-bind</h1>
    <p>{{ num + 10 }}</p>
    <p>{{ flag ? "他爱我" : "他不爱我" }}</p>
    <h1>{{ title }}</h1>
    <button @click="sendMessage">请点击我准</button>
    <button @click="message = '豪豪'">更新</button>
    <h1>{{ chengpin.title }}</h1>
    <h2>count:{{ counter }}</h2>
    <h2>{{ getCounter }}</h2>
    <button @click="addClick">增加</button>
  </div>
</template>

<script>
// import axios from "axios"
import queryString from "queryString"
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapState(['counter']),
    ...mapGetters(['getCounter'])
  },
  data() {
    return {
      message: '测试',
      rawHtml: '<a href="http://www.itbaizhan.com">百战</a>',
      bindId: 10001,
      num: 10,
      flag: true,
      aihaobao: '豪豪',
      chengpin: {},
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendMessage() {
      this.$emit("onHao", this.aihaobao)
    },
    addClick(){
      this.$store.commit("addCounter")
    },
  },
  mounted() {
    // this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res => {
    //   console.log(res.data);
    //   this.chengpin = res.data.chengpinDetails[0]
    // })
    // this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php", queryString.stringify({
    //   user_id: "iwen@qq.com",
    //   password: "iwen123",
    //   verification_code: "crfvw"
    // })).then(res => {
    //   console.log(res.data);
    // })
    // this.$axios.get("/api/FingerUnion/list.php").then(res => {
    //   console.log("呵呵呵呵呵呵呵",res.data);
    // })
    console.log(this.$store);
  },
}
</script>
