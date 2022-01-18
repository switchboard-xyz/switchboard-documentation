module.exports = function (context, options) {
  return {
    name: "loaders",
    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [{ test: /\.txt$/, use: "file-loader" }],
        },
      };
    },
  };
};
