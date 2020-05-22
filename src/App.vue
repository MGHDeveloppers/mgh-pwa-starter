<template>
<div id="app">
  <transition name="component-fade" mode="out-in">
    <router-view />
  </transition>
</div>
</template>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
