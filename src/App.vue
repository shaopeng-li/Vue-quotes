<template>
    <div class="container">
      <app-add-quote @quoteAdded="newQuote"></app-add-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
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
          }
        }
    }
</script>

<style>
</style>
