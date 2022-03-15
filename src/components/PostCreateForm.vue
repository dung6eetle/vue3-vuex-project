<template>
  <div>
    <form class="form__block" @submit.prevent>
      <input
        class="title__input"
        v-model="post.title"
        type="text"
        placeholder="Title"
      />
      <input
        class="body__input"
        v-model="post.body"
        placeholder="Body"
        type="text"
      />
      <button class="button__form" @click="createPost">Создать</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    ...mapActions(["addNewPost"]),
    createPost() {
      this.addNewPost({ title: this.post.title, body: this.post.body });
      this.post.title = "";
      this.post.body = "";
      this.$emit("update:show", false);
    },
  },
};
</script>

<style>
.form__block {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 308px;
}
.title__input {
  color: #111;
  font-size: 20px;
  border-color: coral;
  border-radius: 10px;
  margin-top: 20px;
  width: 300px;
  height: 30px;
}
.body__input {
  color: #111;
  font-size: 20px;
  border-radius: 10px;
  border-color: coral;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  height: 30px;
  width: 300px;
}
.button__form {
  border-color: coral;
  height: 50px;
  border-radius: 10px;
  background-color: antiquewhite;
}
</style>