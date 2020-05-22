<template>
<!-- App Sidebar -->
<div class="modal fade panelbox panelbox-left" ref="sidebarPanel" id="sidebarPanel" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body p-0">
        <router-link data-dismiss="modal" to="/brands">
          <div class="profileBox pt-2 pb-2">
            <div class="image-wrapper">
              <img src="/img/logo.png" alt="image" class="imaged  w36">
            </div>
            <div class="in">
              <strong> PWA Starter </strong>
              <div class="text-muted"><small>Developped by MGH Developpers</small></div>
            </div>
          </div>
        </router-link>

        <!-- menu -->
        <div class="listview-title mt-1">Menu</div>
        <ul class="listview simple-listview b-top b-btm">
          <li>
            <router-link data-dismiss="modal" to="/page-1">Page 1</router-link>
          </li>
          <li>
            <router-link data-dismiss="modal" to="/page-2">Page 2</router-link>
          </li>
          <li>
            <router-link data-dismiss="modal" to="/page-3">Page 3</router-link>
          </li>
        </ul>
        <div class="listview-title mt-2"></div>

        <div class="listview-title mt-2"></div>

        <div class="text-center">
          <a href="https://www.facebook.com/mghdeveloppers/" target="_blank" class="btn btn-facebook btn-icon mr-05">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="https://twitter.com/mghdeveloppers" target="_blank" class="btn btn-twitter btn-icon mr-05">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div class="listview-title mt-1"></div>

        <div class="text-center">
          MGH Developpers 2020
        </div>
      </div>
    </div>
  </div>
</div>
<!-- * App Sidebar -->
</template>

<script>
export default {
  name: 'app-side-bar'
}
</script>

<style scoped>

</style>
