require("dotenv").config();
const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-async-to-generator",
              "@babel/plugin-transform-arrow-functions",
              "@babel/plugin-transform-modules-commonjs",
            ],
          },
        },
        resolve: { extensions: [".js", ".jsx"] },
      },
    ],
  },
};
