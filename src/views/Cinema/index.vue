<template>
    <div>
        <CinemaNavbar></CinemaNavbar>
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import CinemaNavbar from '@/views/Cinema/CinemaNavbar'
export default {
  name: 'Cinema',
  components: {
    Tabbar,
    CinemaNavbar
  }
}
</script>

<style lang="scss" scoped>
div{
  .box{
    width: 100%;
    height: 120px;
    background-color: orange;
  }
}
</style>
