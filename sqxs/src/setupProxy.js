const proxy = require("http-proxy-middleware");

module.exports  = (app)=>{
    app.use("/eva_bookstore",proxy({
        target:"http://bookstoreapi.shuqireader.com",
        changeOrigin:true
    }))
}