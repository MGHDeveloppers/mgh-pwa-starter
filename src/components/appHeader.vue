<template>
<!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <a @click="goBack"  href="javascript:;" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle"> {{ title }} </div>
        <div class="right">
            <a href="javascript:;" class="headerButton">
                <ion-icon name="add-outline"></ion-icon>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'PWA Starter'
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1) || this.$router.push('/home')
    }
  }
}
</script>

<style>

</style>
