<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'child1' }" href="#">card 1</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'child2' }" href="#">card 2</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ path: `/home/child/${child3}` }" href="#">card 3</router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href @click.prevent="updatePath">switch to card 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href @click.prevent="back">back</a>
    </li>
    <li class="nav-item"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      child1: "qwer",
      child3: "1234"
    };
  },
  methods: {
    updatePath() {
      this.$router.push({ name: "child2" });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>