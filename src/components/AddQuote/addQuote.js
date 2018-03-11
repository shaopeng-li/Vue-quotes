export default {
  data: function () {
    return {
      quote: ''
    };
  },
  methods: {
    createNew () {
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    }
  }
}
