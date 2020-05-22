<template>
<div class="appBottomMenu">
  <router-link to="/home" class="item" :class="{ 'active': currentRoute === '/home' }">
    <div class="col">
      <ion-icon name="home-outline"></ion-icon>
      <strong>Menu 1</strong>
    </div>
  </router-link>
  <router-link to="/home/menu-2" class="item" :class="{ 'active': currentRoute === '/home/menu-2' }">
    <div class="col">
      <ion-icon name="time-outline"></ion-icon>
      <strong>Menu 2</strong>
    </div>
  </router-link>
  <router-link to="/home/menu-3" class="item" :class="{ 'active': currentRoute === '/home/menu-3' }">
    <div class="col">
      <ion-icon name="ribbon-outline"></ion-icon>
      <strong>Menu 3</strong>
    </div>
  </router-link>
  <router-link to="/home/menu-4" class="item" :class="{ 'active': currentRoute === '/home/menu-4' }">
    <div class="col">
      <ion-icon name="bookmark-outline"></ion-icon>
      <strong>Menu 4</strong>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'app-bottom-menu',
  data () {
    return {
      currentRoute: this.$route.path
    }
  },
  watch: {
    $route (to, from) {
      this.currentRoute = this.$route.path
    }
  }
}
</script>

<style>

</style>
