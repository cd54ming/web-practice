const app = new Vue({
  el: '#app',
  data: {
    data: [
      {
        name: '巧呼呼蘇打水',
        price: 5,
        expiryDate: 90,
      },
      {
        name: '心驚膽跳羊肉飯',
        price: 65,
        expiryDate: 2,
      },
      {
        name: '郭師傅武功麵包',
        price: 8,
        expiryDate: 1,
      },
      {
        name: '五色鳥',
        price: 999,
        expiryDate: 20,
      },
      {
        name: '紅色藥水',
        price: 50,
        expiryDate: 9999,
      },
      {
        name: '幻彩蘑菇',
        price: 5555,
        expiryDate: 0.5,
      },
      {
        name: '不太會過期的新鮮牛奶',
        price: 75,
        expiryDate: 600,
      },
      {
        name: '金殺巧粒粒',
        price: 120,
        expiryDate: 200,
      },
    ],
    sortRule: '',
    priceAscending: true,
    expiryDateAscending: true,
    ascending: true,
  },
  methods: {
    sort(rule) {
      this.sortRule = rule;
      if (rule === 'price') {
        this.priceAscending = !this.priceAscending;
        this.ascending = this.priceAscending;
      } else if (rule === 'expiryDate') {
        this.expiryDateAscending = !this.expiryDateAscending;
        this.ascending = this.expiryDateAscending;
      }
    },
  },
  computed: {
    sortedData() {
      const rule = this.sortRule;
      if (this.ascending) {
        return this.data.sort((a, b) => (a[rule] - b[rule]));
      }
      return this.data.sort((a, b) => (b[rule] - a[rule]));
    },
  },
  mounted() {
    this.sortRule = 'price';
    this.ascending = this.priceAscending;
  },
});
