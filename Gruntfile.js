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

    // Registers a task to test the task
    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'karma'
    ]);

    grunt.registerTask('default', ['test']);
};
