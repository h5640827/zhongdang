<template>
  <div class="show">
    <!-- <div class="row"> -->
      <!-- <div id="img" class="col-xs-12 col-sm-12 col-md-12"> -->
        <img src="static/show.webp" alt="">
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
import { WOW } from 'wowjs'
import config from '@/config';
export default {
  name: "Show"
}
</script>
<style scoped>
  #show {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    margin: 0 auto;
    margin-top: 5px;
    overflow: auto;
  }

</style>

