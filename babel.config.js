const plugins = ["@vue/babel-plugin-transform-vue-jsx"];

// 生产环境去掉console
if (process.env.VUE_APP_NAME === "production") {
  plugins.push("transform-remove-console");
}

module.exports = {
  plugins: plugins,
  presets: ["@vue/cli-plugin-babel/preset"]
};
