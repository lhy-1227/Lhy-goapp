const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    devServer: {
        // 设置主机地址
       host: '0.0.0.0',
       // 设置默认端口
       port: 8080,
       // 设置代理
       proxy: {
           '/api': {
               // 目标 API 地址
               target: 'http://localhost:80'
           }
       }
   },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('common',resolve('src/common'))
    }
}