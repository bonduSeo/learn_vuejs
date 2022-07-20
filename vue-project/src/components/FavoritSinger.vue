<template>
  <img class="imgSize" :src="imgSrc" />
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "https://64.media.tumblr.com/668073b09096ef7d51f01c19f912fd46/tumblr_py8zt8RwDD1qb2ab9o1_540.jpg",
    };
  },
};
</script>

<style scoped>
.imgSize {
  width: 300px;
}
</style>
