<template>
    <!-- App -->
    <div id="app">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <!-- Left Panel -->
        <f7-panel left reveal layout="dark">
            <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>
                <f7-pages>
                    <f7-page>
                        <f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>
                        <f7-block inner>
                            <p>Left panel content goes here</p>
                        </f7-block>
                        <f7-block-title>Load page in panel</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                        </f7-list>
                        <f7-block-title>Load page in main view</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
                            <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
        <!-- Right Panel -->
        <f7-panel right cover layout="dark">
            <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar v-if="$theme.ios" title="Right Panel" sliding></f7-navbar>
                <f7-pages>
                    <f7-page>
                        <f7-navbar v-if="$theme.material" title="Right Panel" sliding></f7-navbar>
                        <f7-block>
                            <p>Right panel content goes here</p>
                        </f7-block>
                        <f7-block-title>Load page in panel</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About"></f7-list-item>
                            <f7-list-item link="/form/" title="Form"></f7-list-item>
                        </f7-list>
                        <f7-block-title>Load page in main view</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
                            <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
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
                    <f7-nav-left>
                        <f7-link icon="icon-bars" open-panel="left"></f7-link>
                    </f7-nav-left>
                    <f7-nav-center sliding>FEZ webApp 开发框架</f7-nav-center>
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
                        <f7-block-title>欢迎使用FEZ webApp开发框架</f7-block-title>
                        <f7-block inner>
                            <p>本示例是 FEZ 整合了 Framework7 及Vue，可以快速构建高性能的混合移动应用（原生和HTML混合）或者开发 iOS 和 Android 风格的WEB APP。</p>
                        </f7-block>
                        <f7-block-title>导航示例</f7-block-title>
                        <f7-list>
                            <f7-list-item link="/about/" title="关于FEZ"></f7-list-item>
                            <f7-list-item link="/form/" title="表单示例"></f7-list-item>
                            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="REST风格的动态路由"></f7-list-item>
                        </f7-list>
                        <f7-block-title>Side Panels</f7-block-title>
                        <f7-block>
                            <f7-grid>
                                <f7-col width="50">
                                    <f7-button open-panel="left">Left Panel</f7-button>
                                </f7-col>
                                <f7-col width="50">
                                    <f7-button open-panel="right">Right Panel</f7-button>
                                </f7-col>
                            </f7-grid>
                        </f7-block>
                        <f7-block-title>Modals</f7-block-title>
                        <f7-block>
                            <f7-grid>
                                <f7-col width="50">
                                    <f7-button open-popup="#popup">Popup</f7-button>
                                </f7-col>
                                <f7-col width="50">
                                    <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                                </f7-col>
                            </f7-grid>
                        </f7-block>
                        <f7-block-title>更多信息</f7-block-title>
                        <f7-block inner>
                            【
                            <f7-link href="https://github.com/furic-zhao/fez" external target="_blank">FEZ Github社区</f7-link>】 【
                            <f7-link href="http://framework7.cn/" external target="_blank">Framework7 中文网</f7-link>】 【
                            <f7-link href="https://cn.vuejs.org/" external target="_blank">Vue 中文网</f7-link>】 【
                            <f7-link href="http://vue.framework7.cn/" external target="_blank">Framework7-Vue</f7-link>】
                        </f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-views>
        <!-- Popup -->
        <f7-popup id="popup">
            <f7-view navbar-fixed>
                <f7-pages>
                    <f7-page>
                        <f7-navbar title="Popup">
                            <f7-nav-right>
                                <f7-link close-popup>Close</f7-link>
                            </f7-nav-right>
                        </f7-navbar>
                        <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-popup>
        <!-- Login Screen -->
        <f7-login-screen id="login-screen">
            <f7-view>
                <f7-pages>
                    <f7-page login-screen>
                        <f7-login-screen-title>Login</f7-login-screen-title>
                        <f7-list form>
                            <f7-list-item>
                                <f7-label>Username</f7-label>
                                <f7-input name="username" placeholder="Username" type="text"></f7-input>
                            </f7-list-item>
                            <f7-list-item>
                                <f7-label>Password</f7-label>
                                <f7-input name="password" type="password" placeholder="Password"></f7-input>
                            </f7-list-item>
                        </f7-list>
                        <f7-list>
                            <f7-list-button title="Sign In" close-login-screen></f7-list-button>
                            <f7-list-label>
                                <p>Click Sign In to close Login Screen</p>
                            </f7-list-label>
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-login-screen>
    </div>
</template>
<script>
export default {}
</script>
