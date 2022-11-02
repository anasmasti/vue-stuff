<template>
  <Suspense>
    <template #default>
      <HelloWorld msg="Vue stuff" @sendName="getName" />
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
  <h3>{{ name }}</h3>
</template>

<script>
import { ref, Suspense } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Suspense
  },
  setup() {
    let name = ref('')

    function getName(nameValue) {
      console.log(nameValue);
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
