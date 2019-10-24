<template>
  <div v-if="data.id">
    <img :src="data.picture.large" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p
        class="card-text">
      {{ name }} </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    const api = `https://randomuser.me/api/`;
    this.$http.get(api).then(response => {
      this.data = response.data.results[0];
    });
  },
  computed: {
    name() {
      return `${this.data.name.title} ${this.data.name.first} ${this.data.name.last}`;
    }
  }
};
</script>