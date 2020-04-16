<template>
  <div class="t-card">
    <img width="100%" :src="data.img_url">
    <div>
      <h3>{{data.title}}</h3>
      <span>{{data.description}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props:['data'],
  }
</script>
<style lang="scss">
  .t-card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    transition: .2s;
  }
  .t-card:hover{
    transform: scale(1.05);
  }
</style>
