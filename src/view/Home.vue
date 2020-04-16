<template>
  <div>
    <div style="width: 100%;display: table;height: 100vh">
      <div style="display: table-cell;vertical-align: middle">
        <div style="text-align: center">
          <h1 style="font-size: 50px">Product DESIGNER</h1>
          <p style="margin-top: 20px">Made In San Francisco</p>
        </div>
        <div style="text-align: center;margin-top: 40px">
          <div style="margin: auto;width: fit-content;text-align: left">
            Hi, I am Iris Cheong - a sensible designer<br>
            who create delightful solutions to<br>
            overcome complicated situations. I build<br>
            products that withstand time and tests<br>
            not only with my brain, more importantly,<br>
            my heart.
          </div>
        </div>
        <div style="text-align: center;margin-top: 40px">
          <a href="#content">
            <img src="static/img/home/downarrow.png" width="20">
          </a>
        </div>
      </div>
    </div>
    <div id="content" style="min-height: 100vh;padding-top: 80px">
      <h1 style="text-align: center">MY WORKS</h1>
      <vs-row
        vs-align="center"
        vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col :key="index" v-for="(item,index) in works" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12" style="padding: 20px">
          <t-card :data="item"></t-card>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
  import tCard from '../components/tCard'
  import works from "./works";
  export default {
    components:{
      tCard
    },

    data(){
      return{
        works
      }
    }
  }
</script>
