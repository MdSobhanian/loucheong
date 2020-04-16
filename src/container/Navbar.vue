<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <h1>IRIS</h1>
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="#">Work</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">About</a>
      </vs-navbar-item>
    </vs-navbar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
  export default {
    data:()=>({
      activeItem: 0
    })
  }
</script>
