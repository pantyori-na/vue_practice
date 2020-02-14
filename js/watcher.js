new Vue({
  el: '#app',
  data: {
    name: ''
  },

  // created() {
  //   console.log('created');
  //   this.delayFunc = _.debounce(this.getUpper, 2000);
  // },

  // watch: {
  //   name: function (newValue, oldVlue) {
  //     this.delayFunc();
  //     console.log('watch');
  //   }
  // },

  computed: {
    upperName: function () {
      return this.name.toUpperCase();
    }
  },

  // methods: {
  //   getUpper: function () {
  //     console.log('getUpper');
  //     this.upperName = this.name.toUpperCase();
  //   }
  // }
})