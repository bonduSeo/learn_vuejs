<template>
  <img class="imgSize" :src="imgSrc" />
</template>

<script>
export default {
  props: {
    imgSrc: String,
  },
};
</script>

<style scoped>
/* scoped 스코프를 이 파일에 한정? */
.imgSize {
  width: 300px;
}
</style>
