<template>
    <div class="container">
      <app-add-quote @quoteAdded="newQuote"></app-add-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="quoteDeleted"></app-quote-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
        </div>
      </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid/QuoteGrid.vue';
    import AddQuote from './components/AddQuote/AddQuote.vue';

    export default {
        data: function () {
          return {
            quotes: ['just a quote to see sth'],
            maxQuotes: 10
          }
        },
        components: {
          appQuoteGrid: QuoteGrid,
          appAddQuote: AddQuote
        },
        methods: {
          newQuote (quote) {
            this.quotes.push(quote);
          },
          quoteDeleted (index) {
            this.quotes.splice(index, 1);
          }
        }
    }
</script>

<style>
</style>
