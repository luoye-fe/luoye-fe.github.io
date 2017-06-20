'use strict';
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var path = require('path');

var pwd = __dirname;



var vendorPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.min.js',
    minChunks: Infinity
});

var webpackConfig = {
    entry: {
        'vue-animate-demo': ['./src/js/app.js'],
        vendor: [
            'vue'
        ]
    },
    watch: true,
    output: {
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader'
        }]
    },
    plugins: [vendorPlugin],
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias: {

        }
    }
};


gulp.task('js', function() {
    return gulp
        .src('./src/js/app.js')
        .pipe(gulpWebpack(webpackConfig))
        .on('error', function(err) { })
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('css', function() {
    return gulp
        .src('./src/css/app.less')
        .pipe(less({
            // paths: [path.join(pwd, './src/css')],
            "includePaths": [
                "node_modules/vue-animate/src"
            ]
        }))
        .pipe(rename('vue-animate-demo.min.css'))
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('watch', function() {
    gulp.start(['js', 'css']);
    gulp.watch('./src/css/*', ['css']);
})


