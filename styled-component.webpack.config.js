const path = require("path");
const webpack = require('webpack')

module.exports = {
  entry: {
    styledComponent: path.resolve(__dirname, "node_modules/styled-components"),
    reactDom: path.resolve(__dirname, "node_modules/react-dom"),
    reactRouterDom: path.resolve(__dirname, "node_modules/react-router-dom"),
    history: path.resolve(__dirname, "node_modules/history"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: '[name]'
  },
  externals:{
    // Use external version of React
    "react": "react",
    "react-is": "reactIs"
    },
//   module: {
//     noParse: [ path.resolve(__dirname, "node_modules/react") ]
//     }
};
