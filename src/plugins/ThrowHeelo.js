export default {
  install: (app) => {
    app.mixin({
      created() {
        console.log("Hello World");
      },
    });
  },
};
