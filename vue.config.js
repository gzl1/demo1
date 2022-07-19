const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:false,
    host:"localhost",
    port:8080
  },
  configureWebpack:{
    plugins:[
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery",
        Popper:["popper.js",'default']
      })
    ]
  }
})
