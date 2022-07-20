<template>
  <tr>
    <td>{{ item.rank }}</td>
    <!-- <td>{{ item.movieNm }}</td> -->
    <td @click="selectMovie(item)">
      {{ item.movieNm }}
    </td>
    <td>{{ item.openDt }}</td>
    <td>{{ audiAccAddComma }}</td>
    <td>{{ salesAccAddComma }}</td>
  </tr>
  <tr>
    <td colspan="5" v-bind:class="{ dNone: !detail }">
      <rank-detail :item="item" />
    </td>
  </tr>
</template>

<script>
import RankDetail from "./RankDetail.vue";

export default {
  computed: {
    audiAccAddComma() {
      return this.addComma(this.item.audiAcc);
    },
    salesAccAddComma() {
      return this.addComma(this.item.salesAcc);
    },
  },
  data() {
    return {
      detail: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    selectMovie(item) {
      console.log(item);
      this.detail = !this.detail;
    },
  },
  components: {
    RankDetail,
  },
};
</script>

<style></style>
