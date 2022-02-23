<template>
  <div>
    <vue-pdf-embed :source="source1" />
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  components: {
    VuePdfEmbed
  }
}
</script>