<template>
    <fez-page>
        <fez-jumbotron :id="id"></fez-jumbotron>
        <fez-detail :id="id"></fez-detail>
    </fez-page>
</template>
<script>
import fezPage from 'public/module/common/page.vue'
import fezJumbotron from './module/detail/jumbotron.vue'
import fezDetail from './module/detail/index.vue'

import urlParam from 'public/utils/url-param'

export default {
    data() {
            return {
                id: ""
            }
        },
        components: {
            fezPage,
            fezJumbotron,
            fezDetail
        },
        created() {
            let _vm = this
            urlParam('id').then((data) => {
                _vm.id = data
            })
        }
}
</script>
