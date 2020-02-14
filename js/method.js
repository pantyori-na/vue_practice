new Vue({
  el: '#app',
  data: {
    email: 'K-nakamura@example.com'
  },

  methods: {
    localEmail: function () {
      return this.email.split('@')[0].toLowerCase();
    }
  }
});