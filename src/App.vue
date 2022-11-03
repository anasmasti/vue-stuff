<template>
  <MainForm @sendData="handleFormData" />
  <div id="info-card" v-if="Object.keys(formData).length != 0">
    <p v-for="item in Object.keys(formData)" :key="item.name">
      <span>{{ item }} : </span>
      <span>
        <strong v-text="formData[item] ? capitalizeText(formData[item]) : '--'"></strong>
      </span>
    </p>
  </div>
  <!-- <RouterLink to="/hello">Ho to hello</RouterLink> -->
  <RouterView />
  <UserList />
  <!-- <Suspense>
    <template #default>
      <HelloWorld msg="Vue stuff" @sendName="getName" />
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
  <h3>{{ name }}</h3> -->
</template>

<script>
import { ref, reactive } from 'vue';
import capitalizeText from './services/utils/capitalizeText'
import { RouterLink } from 'vue-router';
import MainForm from './components/MainForm.vue'
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    MainForm,
    RouterLink,
    UserList
  },
  setup() {
    // Init name
    let name = ref('')

    // Init form data
    let formData = reactive({})

    // GEt name from child components by custom event
    function getName(nameValue) {
      name.value = nameValue
    }

    // Handle incoming data from the form
    function handleFormData(data) {
      Object.assign(formData, data)
    }

    return {
      name,
      getName,
      handleFormData,
      formData,
      capitalizeText
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

#info-card {
  background: rgb(243, 242, 242);
  padding: 6px;
  border-radius: 12px;
  margin-top: 15px;
  margin-left: 6px;
  margin-right: 6px;
}
</style>
