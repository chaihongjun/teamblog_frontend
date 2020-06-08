/*
 * @Author: ChaiHongJun
 * @Date: 2020-05-26 11:10:47
 * @LastEditTime: 2020-05-26 11:27:42
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("fonts")
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use("file-loader")
      .loader("file-loader")
      .tap((options) => {
        options = {
          // limit: 10000,
          name: "/assets/fonts/[name].[ext]",
        };
        return options;
      })
      .end();
  },
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://www.tp5.com/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "http://localhost",
        },
      },
    },
  },
};
