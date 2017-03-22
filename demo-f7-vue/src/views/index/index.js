// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './index.vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
    el: '#app',
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: Routes,
    },
    // Register App Component
    components: {
        app: App
    }
});
