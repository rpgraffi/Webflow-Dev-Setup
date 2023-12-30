const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    hot: false,
    compress: true,
    allowedHosts: [".vg438d-8080.csb.app"],
    disableHostCheck: true,
  },
});
