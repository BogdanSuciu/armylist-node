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
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: fileObject
      }
    },
    watch: {
      styles: {
        files: ['army/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('compile-less', ['less', 'watch']);
};