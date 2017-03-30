<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="item in listing">
                <h2>{{item.title}}</h2>
                <p>{{item.desc}}</p>
                <p><a class="btn btn-default" :href="'article.html?id=' + item.id" role="button">Detail</a></p>
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
                listing: []
            }
        },
        methods: {
            listingInit: function() {
                let _vm = this
                Service.renderData().then((data) => {
                    _vm.listing = data
                })
            }
        },
        created() {
            this.listingInit()
        }
}
</script>
