<template>
    <!-- App -->
    <div id="app">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <!-- Right Panel -->
        <f7-panel right cover layout="dark">
            <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar v-if="$theme.ios" title="FEZ导航" sliding></f7-navbar>
                <f7-pages>
                    <f7-page>
                        <f7-navbar v-if="$theme.material" title="FEZ导航" sliding></f7-navbar>
                        <f7-list>
                            <f7-list-item v-for="item in common.nav" :link="item.href" :title="item.name" link-view="#main-view" link-close-panel></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
        <!-- Main Views -->
        <f7-views>
            <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
                <!-- iOS Theme Navbar -->
                <f7-navbar v-if="$theme.ios">
                    <f7-nav-center sliding>{{common.siteName}}</f7-nav-center>
                    <f7-nav-right>
                        <f7-link icon="icon-bars" open-panel="right"></f7-link>
                    </f7-nav-right>
                </f7-navbar>
                <!-- Pages -->
                <f7-pages>
                    <f7-page>
                        <!-- Material Theme Navbar -->
                        <f7-navbar v-if="$theme.material">
                            <f7-nav-left>
                                <f7-link icon="icon-bars" open-panel="left"></f7-link>
                            </f7-nav-left>
                            <f7-nav-center sliding>Framework7</f7-nav-center>
                            <f7-nav-right>
                                <f7-link icon="icon-bars" open-panel="right"></f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-block-title>{{index.jumbotron.title}}</f7-block-title>
                        <f7-block inner>
                            <p>{{index.jumbotron.content}}</p>
                        </f7-block>
                        <f7-card>
                            <f7-card-header>
                                {{index.fezdesc}}
                            </f7-card-header>
                            <f7-card-content>
                                <div class="fez-pic"></div>
                            </f7-card-content>
                        </f7-card>
                        <f7-list>
                            <f7-list-item v-for="item in common.nav" :link="item.href" :title="item.name" link-view="#main-view" link-close-panel></f7-list-item>
                        </f7-list>
                        <f7-block-title>更多信息</f7-block-title>
                        <f7-block inner>
                            <p>
                                <f7-link href="https://github.com/furic-zhao/fez" external target="_blank" class="button">FEZ Github社区</f7-link>
                            </p>
                            <p>
                                <f7-link href="http://framework7.cn/" external target="_blank" class="button">Framework7 中文网</f7-link>
                            </p>
                            <p>
                                <f7-link href="https://cn.vuejs.org/" external target="_blank" class="button">Vue 中文网</f7-link>
                            </p>
                            <p>
                                <f7-link href="http://vue.framework7.cn/" external target="_blank" class="button">Framework7-Vue</f7-link>
                            </p>
                        </f7-block>
                        <f7-block>
                            <p>{{common.tips}}</p>
                            <p>{{common.footerText}}</p>
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>
    </div>
</template>
<script>
import Service from './service'
export default {
    data() {
            return {
                index: {
                    fezdesc: "",
                    jumbotron: {
                        title: "",
                        content: "",
                        button: {
                            name: "",
                            href: ""
                        }
                    }
                },
                common: {
                    siteName: "",

                    navData: [],

                    footerText: ""
                }
            }
        },
        methods: {
            indexInit: function() {
                let _vm = this
                Service.renderData().then((data) => {
                    _vm.index = Object.assign({}, data.index)
                    _vm.common = Object.assign({}, data.common)
                })
            }
        },
        created() {
            this.indexInit()
        }
}
</script>
