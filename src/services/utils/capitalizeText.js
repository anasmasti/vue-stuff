import { computed } from "vue";

const capitalizeText = (text) =>
  computed(() => {
    if (text != "") {
      return text.at(0).toUpperCase() + text.slice(1);
    }
  });

export default capitalizeText;
