module.exports = {
        devServer:{
            proxy:{
                '/huang':{
                    target:'http://localhost:8081',
                    ws:true,
                    changeOrigin:true,
                    pathRewrite:{'^/huang':''}
                }
            }
        }
}