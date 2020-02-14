new Vue({
  el: '#app',
  data: {
    email: 'K-nakakura@example.com'
  },
  computed: {
    localEmail: function () {
      return this.email.split('@')[0].toLowerCase();
    }
  },
});