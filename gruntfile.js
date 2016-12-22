module.exports = function(grunt) {

grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/main.css': 'src/sass/main.scss'
            }
        }
    },

    watch: {
      files: ['**/*.scss'],
      tasks: ['sass'],
     },

});
require('load-grunt-tasks')(grunt);

grunt.registerTask('default', ['watch']);

};
