<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <MovieDetail :propsItem="selectedItem" />
    </div>
    <div>
      <input type="date" v-model="selectedDate" />
      <button id="searchBtn" @click="serch">검색</button>
    </div>
    <h1 v-bind:class="{ dNone: list != '' }">Loading...</h1>
    <!-- <RankTable /> -->
    <rank-table :list="list" />
  </div>
</template>

<script>
import MovieDetail from "../components/MovieDetail.vue";
import RankTable from "../components/boxoffice/RankTable.vue";

export default {
  components: {
    MovieDetail,
    RankTable,
  },
  data() {
    return {
      selectedItem: [],
      title: "주간 박스오피스",
      selectedDate: "",
      list: [],
      routeName: "",
    };
  },
  methods: {
    selectMovie(item) {
      // console.log(item);
      this.selectedItem = item;
    },
    serch() {
      const targetDt = this.selectedDate.replaceAll("-", "");
      console.log(targetDt);
      this.getData(targetDt);
    },
    async getData(targetDt) {
      switch (this.routeName) {
        case "boxOfficeByDay":
          this.list = (await this.getBoxOfficeByDay(targetDt)).boxOfficeResult.dailyBoxOfficeList;

          break;
        case "boxOfficeByWeek":
          this.list = (await this.getBoxOfficeByWeek(targetDt, 0)).boxOfficeResult.weeklyBoxOfficeList;
          break;
      }
    },
  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getDateStr(d);
    // console.log(this.selectedDate);
    this.routeName = this.$route.name;
    console.log("routeName::");
    console.log(this.routeName);

    switch (this.routeName) {
      case "boxOfficeByDay":
        this.title = "일별 박스오피스";
        break;
      case "boxOfficeByWeek":
        this.title = "주간 박스오피스";
        break;
    }
    this.serch();
  },
  updated() {
    this.routeName = this.$route.name;
    console.log("routeName::");
    console.log(this.routeName);

    switch (this.routeName) {
      case "boxOfficeByDay":
        this.title = "일별 박스오피스";
        break;
      case "boxOfficeByWeek":
        this.title = "주간 박스오피스";
        break;
    }
  },
};
</script>

<style scoped></style>
