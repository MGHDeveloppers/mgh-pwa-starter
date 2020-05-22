<template>
<div id="appCapsule" >
  <h1>MENU 2</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id" >  {{ todo.title }} </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      todos: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
      this.todos = result.data.slice(0, 10)
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
