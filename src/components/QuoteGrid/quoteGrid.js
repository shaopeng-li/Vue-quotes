import Quote from '../Quote/Quote.vue';

export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote (index) {
      this.$emit('quoteDeleted', index);
    }
  }
}
