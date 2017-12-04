module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      js: {
        src: 'src/js/script.js',
        dest: 'build/js/scripts.min.js'
      }
    },
    less: {
      development: {
        files: {
          'public/css/styles.css': 'public/css/styles.less'
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['public/css/*.less'],
        tasks: ['less']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-reload')


  // Default task(s).
  grunt.registerTask('default', ['watch']);
};
