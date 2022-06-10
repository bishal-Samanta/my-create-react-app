const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //Entry setup
    entry: "./src/index.js",
    
    //Output setup
    output: {
        path: path.resolve(__dirname , "dist"),
        filename: "bundle.js"
    },

    //Loaders setup
    module: {

        rules: [
            //CSS
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            //SVG
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },

            //Image
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },

            //Babel Loaders
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                  loader: 'babel-loader',
                }
            },



        ]
    },


    //Plugins
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
          })
    ],

    //Mode
    mode: "development", 



}