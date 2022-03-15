export default {
  mounted(el, binding) {
    console.log('MOUN', el, binding)
    el.onscroll = () => {
      binding.value()
    }
  },
  unmounted(el, binding) {
    console.log('UNMoun', el, binding)
    el.onscroll = null
  },
}
