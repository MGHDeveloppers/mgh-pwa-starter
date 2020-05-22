<template>
<div class="">

  <app-header-home />

  <router-view />

  <app-bottom-menu />

  <app-side-bar />

  <notification-panel />

</div>
</template>

<script>

import NotificationPanel from '../components/notificationPanel.vue'
import AppSideBar from '../components/appSideBar.vue'
import AppHeaderHome from '../components/appHeaderHome.vue'
import AppBottomMenu from '../components/appBottomMenu'

export default {
  name: 'Home',
  components: {
    AppHeaderHome,
    AppSideBar,
    AppBottomMenu,
    NotificationPanel
  }
}
</script>
