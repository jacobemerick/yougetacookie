module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    bowercopy: {
      scripts: {
        options: {
          destPrefix: 'build/temp'
        },
        files: {
          'js.cookie.js': 'js-cookie/src/js.cookie.js'
        }
      }
    },
    clean: {
      folder: [
        'bower_components',
        'build'
      ]
    },
    uglify: {
      scripts: {
        files: {
          'web/scripts/vendor/js.cookie.min.js': 'build/temp/js.cookie.js'
        }
      }
    }
  });

  grunt.registerTask(
    'default',
    [
      'bowercopy',
      'uglify',
      'clean'
    ]
  );
};
