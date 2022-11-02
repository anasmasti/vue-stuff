export default {
  install: (app) => {
    app.directive("put-color", {
      beforeMount: (el, binding) => {
        el.style.color = binding.arg;
      },
    });
  },
};
