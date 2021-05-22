module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/docs',
        publicPath: '/docs/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },
        {
            test: /\.svg$/,
            use: ['file-loader']
        }]
    }
};