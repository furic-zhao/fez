export default [{
    path: '/about/',
    component: require('./module/about/index.vue')
}, {
    path: '/form/',
    component: require('./module/form/index.vue')
}, {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./module/dynamic-route/index.vue')
}]
