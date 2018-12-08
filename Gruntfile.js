module.exports = function(grunt) {
  
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    critical: {
      agency: {
        options: {
          base: './',
          css: [
            'agency/css/main.css',
            'agency/css/bootstrap.css',
            'agency/css/animate.css',
            'agency/css/font-awesome.min.css',
            'agency/css/linearicons.css',
            'agency/css/owl.carousel.css'
          ],
          width: 1300,
          height: 900
        },
        src: 'agency/index.html',
        dest: 'agency/generated/critical.css'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-critical');
};