<template>
  <MainForm @sendData="handleFormData" />
  <div id="info-card" v-if="Object.keys(formData).length != 0">
    <p v-for="item in Object.keys(formData)" :key="item.name">
      <span>{{ capitalizeText(item) }} : </span>
      <span id="value" v-text="formData[item] ? capitalizeText(formData[item]) : '--'">
      </span>
    </p>
  </div>
  <RouterLink to="/hello">Ho to hello</RouterLink>
  <RouterView />
  <UserList />
  <!-- <Suspense>
    <template #default>
      <HelloWorld msg="Vue stuff" @sendName="getName" />
    </template>
    <template #fallback>Loading...</template>
  </Suspense> -->
  <!--  <h3>{{ name }}</h3> -->
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
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

    onMounted(() => {
      let bodyTarget = document.body
      let containerTarget = document.createElement('div')
      let h1Target = document.createElement('h1')
      let pTarget = document.createElement('p')
      let buttonTarget = document.createElement('button')

      let paraText = document.createTextNode('This is paragraph')
      let h1Text = document.createTextNode('This is header')
      let buttonText = document.createTextNode('Click')

      let attr = document.createAttribute('data')

      h1Target.appendChild(h1Text)

      pTarget.appendChild(paraText)
      pTarget.setAttributeNode(attr)

      buttonTarget.appendChild(buttonText)

      containerTarget.appendChild(h1Target)
      containerTarget.appendChild(pTarget)
      containerTarget.appendChild(buttonTarget)

      bodyTarget.appendChild(containerTarget)

      buttonTarget.addEventListener('click', () => {
        let pCLone = pTarget.cloneNode(true)
        containerTarget.appendChild(pCLone)
      })
    })

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-top: 60px;
}

#info-card {
  background: rgb(249, 249, 249);
  padding: 6px;
  border-radius: 12px;
  margin-top: 15px;
  margin-left: 6px;
  margin-right: 6px;
}

#value {
  font-weight: 900;
}
</style>
