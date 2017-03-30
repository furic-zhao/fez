<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">{{headerData.siteName}}</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li v-for="item in headerData.navList">
                        <a :href="item.href">{{item.name}}</a>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>
</template>
<script>
import Service from './common'
import Q from 'q'
export default {
    data() {
            return {
                headerData: {
                    siteName: "",
                    navList: []
                }
            }
        },
        methods: {
            headerDataInit: function() {
                let _vm = this
                Q.all([
                    Service.siteName(),
                    Service.navList()
                ]).then((data) => {
                    let rtnData = {
                        siteName: data[0],
                        navList: data[1]
                    }
                    _vm.headerData = Object.assign({}, rtnData)
                })

            }
        },
        created() {
            this.headerDataInit()
        }
}
</script>
