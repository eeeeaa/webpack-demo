const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
//NOTE: json is natively supported

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
};