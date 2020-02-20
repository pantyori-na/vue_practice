new Vue({
  el: '#app',
  data: {
    unit: {}
  },
  methods: {
    onchenge: function () {
      console.log(this.unit.name + ':' + this.unit.size);
    }
  }
});