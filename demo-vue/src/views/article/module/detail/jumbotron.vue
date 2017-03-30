<template>
    <div class="jumbotron">
        <div class="container">
            <h1>hello,{{jumbotronData.title}}!</h1>
            <p>{{jumbotronData.desc}}</p>
            <p>
                <a class="btn btn-primary btn-lg" :href="jumbotronData.viewMore.href" role="button">{{jumbotronData.viewMore.text}}
                </a>
            </p>
        </div>
    </div>
</template>
<script>
import Service from './service'
import urlParam from 'public/utils/url-param'
export default {
    data() {
            return {
                jumbotronData: {
                    title: "",
                    desc: "",
                    viewMore: {
                        name: ``,
                        href: ""
                    }
                }
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
                    _vm.jumbotronData = Object.assign({}, data)
                })
            }
        }
}
</script>
