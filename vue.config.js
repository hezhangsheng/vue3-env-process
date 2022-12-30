module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 打包路径
  assetsDir: "static", // 打包后静态资源存放路径  相对于 'outputDir'
  lintOnSave: process.env.NODE_ENV === "development", // 是否启用 eslint 验证
  productionSourceMap:process.env.VUE_APP_NAME !== 'production', // 生产环境是否生成 sourceMap 文件
  devServer: {
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    // 当出现编译器错误或警告时，显示浏览器中的全屏覆盖
    overlay: {
      warnings: false, // 警告
      errors: true // 错误
    },
    // 配置代理
    proxy: {
      // 匹配以 /api 开头的请求
      "/api": {
        target: "https://www.baidu.com", // 转成这个
        changeOrigin: true, // 开启代理，处理跨域
        // 路径重写
        pathRewrite: {
          "^/api": "api" // 匹配以 /api 开头的，重写成 api
        }
      }
    }
  }
};
