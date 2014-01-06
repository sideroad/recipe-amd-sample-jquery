module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist'],

    recipe: {
      main: {
        options: {
          concat: false,
          amd: true
        },
        files: {
          'dist/recipe': ['recipe.json']
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recipe');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'recipe', 'uglify']);
};

