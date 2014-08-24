module.exports = function (grunt) {
    grunt.initConfig({
        'coveralls': {
            'options': {
                'coverage_dir': 'coverage'
            }
        },
        'karma': {
            'unit': {
                'configFile': 'karma.conf.js'
            }
        },
        'jshint': {
            'src': [
                './*.js',
                'src/distance.js'
            ],
            'options': {
                'jshintrc': '.jshintrc'
            }
        },
        'jscs': {
            'src': '<%= jshint.src %>'
        }
    });

    require('load-grunt-tasks')(grunt);

    // Registers a task to test the plugin
    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'karma'
    ]);

    // Registers a task to test the plugin & use coveralls
    grunt.registerTask('travisBuild', [
        'test',
        'coveralls'
    ]);

    grunt.registerTask('default', ['test']);
};
