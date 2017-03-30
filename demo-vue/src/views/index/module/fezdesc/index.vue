<template>
    <div class="container fezdesc">
        <div class="row">
            <div class="col-md-12">
                <h3>{{fezdesc}}</h3>
                <div class="fez-big-logo"></div>
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
                fezdesc: ""
            }
        },
        methods: {
            fezdescInit: function() {
                let _vm = this
                Service.renderData().then((data) => {
                    _vm.fezdesc = data
                })
            }
        },
        created() {
            this.fezdescInit()
        }
}
</script>
