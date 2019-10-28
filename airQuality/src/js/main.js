const card = {
  props: ['data', 'stared'],
  template: '#card',
  methods: {
    star() {
      this.$emit('star', this.data);
    },
  },
  computed: {
    status() {
      switch (this.data.Status) {
        case '普通':
          return 'status-normal';
        case '對敏感族群不健康':
          return 'status-minor-unhealthy';
        case '對所有族群不健康':
          return 'status-unhealthy';
        case '非常不健康':
          return 'status-very-unhealthy';
        case '危害':
          return 'status-danger';
        default:
          return;
      }
    },
  },
};

new Vue({
  el: '#app',
  data: {
    location: [],
    staredData: [],
    data: [],
    filterWord: 'default',
  },
  methods: {
    star(data) {
      if (!this.staredData.find(item => item.SiteId === data.SiteId)) {
        this.staredData.push(data);
      } else {
        this.staredData = this.staredData.filter(
          item => item.SiteId !== data.SiteId
        );
      }
    },
  },
  watch: {
    staredData() {
      localStorage.setItem('staredData', JSON.stringify(this.staredData));
    },
  },
  computed: {
    filteredData() {
      if (this.filterWord === 'all' || this.filterWord === 'default') {
        return this.data.sort((prev, current) => prev.AQI - current.AQI);
      }
      return this.data.filter(item => item.County === this.filterWord).sort((prev, current) => prev.AQI - current.AQI);
    },
  },
  created() {
    // API resource: https://opendata.epa.gov.tw/Data/Contents/AQI/
    const api = 'https://opendata.epa.gov.tw/api/v1/AQI?format=json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api);
    xhr.send();
    xhr.onload = result => {
      const response = JSON.parse(result.currentTarget.response);
      this.data = response;
      this.staredData = JSON.parse(localStorage.getItem('staredData')) || [];
      response.forEach(data => {
        if (!this.location.includes(data.County)) {
          this.location.push(data.County);
        }
        // update staredData
        this.staredData.forEach(item => {
          if (item.SiteId === data.SiteId) {
            item = data;
          }
        });
      });
    };
  },
  components: {
    card,
  },
});
