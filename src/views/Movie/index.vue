<template>
    <div>
        <filmHeader class="fixed"></filmHeader>
        <router-view></router-view>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import filmHeader from '@/views/Movie/filmHeader'
export default {
  name: 'Movie',
  components: {
    Tabbar,
    filmHeader
  }
}
</script>
