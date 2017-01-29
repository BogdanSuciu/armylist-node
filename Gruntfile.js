var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// array with path to css file - includes file name without extension
var cssList = [
  "army/app/styles/styles",
  "army/app/directives/one-d-table/one-d-table",
  "army/app/directives/two-d-table/two-d-table",
  "army/app/directives/modal/modal",
  "army/app/modules/main-navigation/directives/main-navigation",
  "army/app/modules/quick-reference/css/quick-reference",
  "army/app/modules/army-list/css/army-list-modal"
];

// object that will contain all the css/less paths
var fileObject = {};

// constructing the file object
for(var i=0; i<cssList.length; i++) {
  var fileName = cssList[i];
  fileObject[fileName + ".css"] =  [fileName + ".less"];
}

// exporting grunt task
module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    webpack: {
        options: {
          context: __dirname + '\\army',
          entry: {
            app: '.\\index.js',
            vendor: [
              'angular',
              'ngstorage-webpack',
              'angular-route',
              'jquery',
              'bootstrap'
            ]
          },
          output: {
            path: __dirname + '\\army\\dist',
            filename: 'bundle.js'
          },
          module: {
            loaders: [
              {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '\\army',
               },
              {
                  test: /\.less$/,
                  loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
              }
            ],
          },
          plugins: [
          
            new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
            
            new webpack.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery"
            }),
            
            new ExtractTextPlugin("styles.css")
            
          ]
        },
        build: {
            // configuration for this build
        }
    },
    watch: {
      webpack: {
        files: ['army/app/*.js', 'army/index.js', 'army/**/*.less'], // which files to watch
        tasks: ['webpack'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('compile-webpack', ['watch']);
};