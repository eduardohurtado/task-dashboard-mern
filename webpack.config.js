const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/Index.App.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],

  devtool: "source-map",

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        enforce: "pre",
        test: /\.js?$/,
        loader: "source-map-loader",
      },
      {
        // test: /\.s[ac]ss$/i,
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: "style-loader",
          },
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(woff(2)?|ttf|eot|svg|gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
};
