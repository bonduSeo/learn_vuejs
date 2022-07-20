import axios from "axios";

export default {
  data() {
    return {
      key: "3708b6c56b451f60190e9b17e9c4ba96",
      baseUrl: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/",
      boxOfficeByDay: "boxoffice/searchDailyBoxOfficeList.json",
      boxOfficeByWeek: "boxoffice/searchWeeklyBoxOfficeList.json",
    };
  },
  methods: {
    async $api(url, parameter) {
      return (
        await axios
          .get(url, {
            params: parameter,
          })
          .catch((e) => {
            console.log(e);
          })
      ).data;
    },
    async getBoxOfficeByDay(targetDt) {
      const parameter = {
        key: this.key,
        // 'targetDt' : targetDt, 키값과 변수명이 같다면 아래와같이 가능
        targetDt,
      };
      const url = this.baseUrl + this.boxOfficeByDay;
      return await this.$api(url, parameter);
    },
    getDateStr(date) {
      return date.toISOString().slice(0, 10);
    },
    async getBoxOfficeByWeek(targetDt, weekGb) {
      const parameter = {
        key: this.key,
        targetDt,
        weekGb,
      };
      const url = this.baseUrl + this.boxOfficeByWeek;
      return await this.$api(url, parameter);
    },
    addComma(num) {
      return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
