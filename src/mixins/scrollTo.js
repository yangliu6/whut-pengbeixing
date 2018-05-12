export default {
  methods: {
    scrollTo(value) {
      let target = document.documentElement.scrollTop
      if (value < 0) value = target + value
      let timer = setInterval(function () {
        target -= Math.ceil(target / 10)
        if (target < value) target = value
        window.scrollTo(0, target)
        if (target == value) {
          clearInterval(timer)
        }
      }, 10)
    }
  }
}
