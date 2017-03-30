<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 blog-main">
                <div class="blog-post">
                    <hr>
                    <div v-html="content"></div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
import Service from './service'

export default {
    data() {
            return {
                content: ""
            }
        },
        props: {
            id: {
                type: String,
                default: 0
            }
        },
        watch: {
            id: function(val, oldVal) {
                this.jumbotron(val)
            }
        },
        methods: {
            jumbotron: function(id) {
                let _vm = this
                Service.renderData(id).then((data) => {
                    _vm.content = data.content
                });
            }
        }
}
</script>
