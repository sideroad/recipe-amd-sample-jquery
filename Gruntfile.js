module.exports = function(grunt) {
  grunt.initConfig({
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
          'dist/recipe/foo.js': ['src/recipe/foo.js'],
          'dist/recipe/recipe.js': ['src/recipe/recipe.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recipe');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['recipe', 'uglify']);
};

