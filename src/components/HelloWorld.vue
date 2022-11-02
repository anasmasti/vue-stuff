<template>
  <div class="hello">
    <h1 v-put-color:purple>{{ msg }}</h1>
    <input type="text" v-model="name">
    <button @click="sendName(); addSkill()">send name</button>

    <template v-for="(skill, idx) in skills" :key="idx">
      <p v-text="skill"></p>
    </template>
  </div>
</template>

<script >
import { ref } from 'vue';
import { useStore } from 'vuex'

const getSkills = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return ['data1', 'data2']
}

export default {
  name: "HelloWorld",
  props: ["msg"],
  async setup(_, context) {
    // Init store
    let store = useStore();

    // Init name
    let name = ref("Anas");

    // Get skills from store by getter
    let addSkill = () => store.dispatch("addSkillAction", "Angular");

    // Get skills from promise
    let skills = await getSkills()

    // Get skills from store by getter
    // let skills = computed(() => store.getters.getSkills);

    // Still watching the name value
    // watch(name, (val) => console.log("Name changes" + val));

    // Pass the event to the parent component with name
    function sendName() {
      context.emit("sendName", name.value);
    }

    return {
      name,
      sendName,
      skills,
      addSkill
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
