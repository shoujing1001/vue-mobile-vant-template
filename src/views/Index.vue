<template>
  <div>
    <div> {{hello}} </div>
    <van-tabbar v-model="active" @change="onChange">
  <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
  <van-tabbar-item icon="search">列表页</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import { Notify } from 'vant'

export default {
  name: 'index',
  data() {
    return {
      hello: 'hello,vue!',
      active: 0
    }
  },
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index });
      
      if(index === 1){
        this.$router.push('List')
      }
    },
  }
}
</script>
