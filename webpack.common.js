//NOTE: require(...) is basically like import, but usually used in Node.js
const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//NOTE: json is natively supported

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: { //chains of loaders, it runs in order from top to bottom
        rules: [
            {
                test: /\.css$/i, //load and optimize css
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //load and optimize image
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, //load and optimize fonts
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i, //load and optimize csv
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i, //load and optimize xml
                use: ['xml-loader'],
            },
            {
                test: /\.toml$/i, //load and optimize toml
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/i, //load and optimize yaml
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i, //load and optimize json5
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
    plugins: [
        //this plugin automatically generates a html files in dist folder
        new HtmlWebpackPlugin({ 
            //use `title` if want a built-in template 
            //or set custom template for generating html with `template`
            //for more info: https://github.com/jantimon/html-webpack-plugin#options

            template: './src/template.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};