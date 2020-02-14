new Vue({
  el: "#app",
  data: {
    current: new Date()
  },

  created() {
    console.log(this);
    let that = this;
    this.timer = setInterval(function () {
      that.current = new Date();
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.time);
  }
});