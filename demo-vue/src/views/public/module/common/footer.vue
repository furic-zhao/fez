<template>
    <footer class="container">
        <span class="pull-left">{{text}}</span>
        <span class="pull-right">
		<i class="icon icon-weixin"></i>
		<i class="icon icon-weibo"></i>
	</span>
    </footer>
</template>
<script>
import Service from './common'
export default {
    data() {
            return {
            	text:""
            }
        },
        methods: {
            footer: function() {
                Service.footerText().then((data) => {
                	this.text = data
                })
            }
        },
        created() {
        	this.footer()
        }
}
</script>
