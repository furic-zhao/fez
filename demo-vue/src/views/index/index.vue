<template>
    <fez-page>
        <fez-jumbotron></fez-jumbotron>
        <fez-fezdesc></fez-fezdesc>
    </fez-page>
</template>
<script>
import fezPage from 'public/module/common/page.vue'
import fezJumbotron from './module/jumbotron/index.vue'
import fezFezdesc from './module/fezdesc/index.vue'

export default {
    components: {
        fezPage,
        fezJumbotron,
        fezFezdesc
    }
}
</script>
