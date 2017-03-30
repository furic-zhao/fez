<template>
    <f7-page>
        <f7-navbar :title="jumbotron.title" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <p>{{jumbotron.content}}</p>
            <p>
                <f7-link :href="jumbotron.button.href" external target="_blank" class="button">{{jumbotron.button.name}}</f7-link>
            </p>
        </f7-block>
        <div class="list-block media-list">
            <ul>
                <li class="swipeout" v-for="item in listing">
                    <div class="swipeout-content">
                        <a :href="'/article/id/'+item.title+'/'" class="item-link item-content">
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">{{item.title}}</div>
                                </div>
                                <div class="item-text">{{item.desc}}</div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </f7-page>
</template>
<script>
import Service from './service'

export default {
    data() {
            return {
                listing: [],
                jumbotron: {
                    button: {}
                }
            }
        },
        methods: {
            listingInit: function() {
                let _vm = this
                Service.renderData().then((data) => {
                    _vm.listing = data.listing
                    _vm.jumbotron = Object.assign({}, data.jumbotron)
                })
            }
        },
        created() {
            this.listingInit()
        }
}
</script>
