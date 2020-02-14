new Vue({
  el: '#app',
  data: {
    current: new Date().toLocaleString()
  },
  // 算出プロパティー
  computed: {
    randomc: function () {
      return Math.random();
    }
  },

  methods: {
    onclick: function () {
      this.current = new Date().toLocaleString();
    },
    // メソッド経由で乱数取得

    randomm: function () {
      return Math.random();
    }
  }
});