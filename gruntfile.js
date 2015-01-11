module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 	
	bowercopy: {
		options: {
		},
		test: {
			options: {
				destPrefix: 'test/bower'
			},
			files: {
				'require.js': 'requirejs/require.js'
			}
		}
	},

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy'); 
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.registerTask('default', ['bowercopy', 'karma']);
};

