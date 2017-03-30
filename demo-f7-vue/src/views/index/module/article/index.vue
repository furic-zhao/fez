<template>
    <f7-page>
        <f7-navbar :title="detail.title" back-link="Back" sliding></f7-navbar>
        <f7-block-title>Hello {{detail.title}}!</f7-block-title>
        <f7-block inner>
            <p>{{detail.desc}}</p>
        </f7-block>
        <f7-block inner>
            <p v-html="detail.content"></p>
            <p>
                <f7-link :href="detail.viewMore.href" external target="_blank" class="button">{{detail.viewMore.text}}</f7-link>
            </p>
        </f7-block>
    </f7-page>
</template>
<script>
import Service from './service'
export default {
    data() {
            return {
                detail: {
                    title: "",
                    desc: "",
                    content: "",
                    viewMore: {
                        text: "",
                        href: ""
                    }
                }
            }
        },
        methods: {
            jumbotron: function(id) {
                let _vm = this
                Service.renderData(id).then((data) => {
                    _vm.detail = Object.assign({}, data)
                })
            }
        },
        created() {
            let _vm = this
            let id = _vm.$route.params.id
            this.jumbotron(id)
        }
}
</script>
