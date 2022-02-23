<template>
  <div>
    <vue-pdf-embed source="http://112.30.100.219:9374/zkjg-scf/profile/contractFile/supplier/20220221/164541027101000001.pdf" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  components: {
    VuePdfEmbed
  }
}
</script>