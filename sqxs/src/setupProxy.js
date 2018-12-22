const proxy = require("http-proxy-middleware");

module.exports  = (app) => {
    app.use("/novel",proxy({
        target:"http://read.xiaoshuo1-sm.com",
        changeOrigin:true
    }))
	app.use("/eva_bookstore",proxy({
		target:"http://bookstoreapi.shuqireader.com",
		changeOrigin:true
	}))

}