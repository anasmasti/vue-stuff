<template>
  <MainForm />
  <!-- <Suspense>
    <template #default>
      <HelloWorld msg="Vue stuff" @sendName="getName" />
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
  <h3>{{ name }}</h3> -->
</template>

<script>
import { ref } from 'vue';
import MainForm from './components/MainForm.vue'

export default {
  name: 'App',
  components: {
    MainForm
  },
  setup() {
    // Init name
    let name = ref('')

    // GEt name from child components by custom event
    function getName(nameValue) {
      name.value = nameValue
    }

    return {
      name,
      getName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
