const path = require("path");


module.exports = {
  entry: {
    react: path.resolve(__dirname, "node_modules/react"),
    reactIs: path.resolve(__dirname, "node_modules/react-is"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: '[name]'
  },
};
