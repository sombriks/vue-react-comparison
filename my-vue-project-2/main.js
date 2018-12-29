const Vue = require("vue")
const app = document.getElementById("div")
document.body.appendChild(app)
new Vue({el:app, render: r => r(require("./app.vue"))})