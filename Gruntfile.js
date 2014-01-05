module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist'],
    bower: {
      install: {}
    },
    copy: {
      recipe: {
        files: {
          'dist/recipe/recipe.js': ['lib/recipe/recipe.unpack.js']
        }
      }
    },
    recipe: {
      main: {
        options: {
          dest: 'dist/recipe',
          concat: false,
          amd: true
        },
        files: {
          'dist': ['recipe.json']
        }
      }
    },
    uglify: {
      menu:{
        files: {
          'dist/recipe/foo.js': ['src/recipe/foo.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recipe');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'bower', 'copy', 'recipe', 'uglify']);
};

