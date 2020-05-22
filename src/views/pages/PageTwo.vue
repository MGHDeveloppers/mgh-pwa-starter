<template>
<div>
  <app-header title="Page Two" />
  <div id="appCapsule">
    <h1>Page Two</h1>
    <app-footer />

  </div>
</div>
</template>

<script>
import AppHeader from '../../components/appHeader'
import AppFooter from '../../components/appFooter'

export default {
  name: 'page-one',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
