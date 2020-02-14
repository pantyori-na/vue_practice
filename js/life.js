let app = new Vue({
  el: '#app',
  data: {
    message: 'こんにちは'
  },
  beforeCreate: function () {
    console.log('beforeCreate..');
  },
  created() {
    console.log('created...');
  },
  beforeMount() {
    console.log('beforeMount...');
  },
  mounted() {
    console.log('mounted...');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate...');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestoy');
  },
  destroyed() {
    console.log('desroyed..');
  }
});

setTimeout(function () {
  app.$destroy();
}, 3000);