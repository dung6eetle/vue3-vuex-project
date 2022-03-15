<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <div class="dialog__header">
        <h3 class="title">{{ title }}</h3>
        <span
          style="cursor: pointer; color: black; font-size: 30px"
          @click="hideDialog"
          >X</span
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    show: {
      default: false,
      type: Boolean,
    },
    title: String,
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.title {
  display: block;
  color: blueviolet;
  font-size: 30px;
}
.dialog {
  background: rgb(0, 0, 0, 0.8);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog__content {
  display: flex;
  flex-direction: column;
  background-color: rgb(235, 210, 210);
  padding: 15px 30px;
  border-radius: 20px;
}
.dialog__header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: -20px;
}
</style>