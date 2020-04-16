<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <img src="static/img/home/logo.png" height="60">
<!--          <h1>IRIS</h1>-->
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="#content">Work</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">About</a>
      </vs-navbar-item>
    </vs-navbar>
    <router-view :key="$route.fullPath"></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from './Footer'
  export default {
    components:{Footer},
    data:()=>({
      activeItem: 0
    })
  }
</script>
