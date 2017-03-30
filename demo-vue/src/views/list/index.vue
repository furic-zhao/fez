<template>
    <fez-page>
        <fez-jumbotron></fez-jumbotron>
        <fez-listing></fez-listing>
    </fez-page>
</template>
<script>
import fezPage from 'public/module/common/page.vue'
import fezJumbotron from './module/jumbotron/index.vue'
import fezListing from './module/listing/index.vue'

export default {
    components: {
        fezPage,
        fezJumbotron,
        fezListing
    }
}
</script>
