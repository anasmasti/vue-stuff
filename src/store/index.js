import { createStore } from "vuex";

// Create Store
const mainStore = createStore({
  // Put global state
  state() {
    return {
      skills: ["React", "JS"],
    };
  },

  // Set getters
  getters: {
    getSkills(state) {
      return state.skills;
    },
  },

  // Set mitations
  mutations: {
    addSkill: (state, payload) => {
      state.skills.push(payload);
    },
  },

  // Set actions
  actions: {
    addSkillAction(context, payload) {
      context.commit("addSkill", payload);
    },
  },
});

export default mainStore;
