<template>
  <div class="t-card">
    <div  class="hover">
      <div  style="display: table-cell;vertical-align: middle;text-align: center;color: white">
        <h3 @click="gotoProject">{{data.title}}</h3>
        <span>{{data.type}}</span>
      </div>
    </div>
    <img :src="data.img_url">
    <div style="color: black">
      <h3>{{data.title}}</h3>
      <span>{{data.type}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data','index'],
    methods:{
      gotoProject(){
        console.log('test')
        this.$router.push({path:'/project/'+this.index})
      }
    }
  }
</script>
<style lang="scss">
  .t-card {
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    transition: .2s;
    cursor: pointer;
    img {
      width: 100%;
      max-width: 375px;
    }
    .hover{
      display: none;
    }

  }
  .t-card:hover {
    transform: scale(1.05);
    .hover {
      background: #6F5281c5;
      position: absolute;
      display: table;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
    }
  }
</style>
