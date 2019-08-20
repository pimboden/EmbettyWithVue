<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <embetty-video type="youtube" start-at="96" video-id="3L4fHrIJ3A4"></embetty-video>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld
  },
  head:{
    title:{
      inner:'My Embetty test'
    }
  }
}
</script>
