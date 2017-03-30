<template>
    <div class="jumbotron">
        <div class="container">
            <h1 v-text="jumbotronData.title"></h1>
            <p v-text="jumbotronData.content"></p>
            <p>
                <a class="btn btn-primary btn-lg" :href="jumbotronData.button.href" role="button" v-html="jumbotronData.button.name"></a>
            </p>
        </div>
    </div>
</template>
<script>
import Service from './service'

export default {
    data() {
            return {
                jumbotronData: {
                    title: "",
                    content: "",
                    button: {
                        name: ``,
                        href: ""
                    }
                }
            }
        },
        methods: {
            jumbotron: function() {
                let _vm = this
                Service.renderData().then((data) => {
                    _vm.jumbotron = Object.assign(_vm.jumbotronData, data)
                })
            }
        },
        created() {
            this.jumbotron()
        }
}
</script>
