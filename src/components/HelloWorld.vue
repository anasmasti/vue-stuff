<template>
  <div class="hello">
    <h1 v-put-color:purple>{{ msg }}</h1>
    <input type="text" v-model="name">
    <button @click="sendName, addSkill()">send name</button>

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
    let store = useStore();
    let name = ref("Anas");
    let addSkill = () => store.dispatch("addSkillAction", "Angular");
    let skills = await getSkills()

    // let skills = computed(() => store.getters.getSkills);
    // watch(name, (val) => console.log("Name changes" + val));

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
