<template>
    <div>
        <CinemaNavbar></CinemaNavbar>
        <CinemaList></CinemaList>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import CinemaNavbar from '@/views/Cinema/CinemaNavbar'
import CinemaList from '@/views/Cinema/CinemaList'
export default {
  name: 'Cinema',
  components: {
    Tabbar,
    CinemaNavbar,
    CinemaList
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
