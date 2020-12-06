import Vue from 'vue'
import App from './app'

 /*eslint-disable-line no-unused-vars*/
const Vm = new Vue({
    created() {
        console.log(Vm)
    },
    el: "#app",
    render: h => h(App)
})
