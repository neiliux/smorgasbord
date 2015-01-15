/*global module */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
 	
	    bowercopy: {
            test: {
                options: {
				    destPrefix: "test/bower"
                },
                files: {
				    "jquery.js": "jquery/dist/jquery.js",
                    "chai.js": "chai/chai.js",
                    "chai-jquery.js": "chai-jquery/chai-jquery.js"
                }
            },
            sandbox: {
                options: {
                    destPrefix: "sandbox/vendor"
                },
                files: {
                    "angular.js": "angular/angular.js"
                }
            }
        },
        
        less: {
            development: {
                options: {
                    paths: ["src"]
                },
                files: {
                    "test/smorgasbord-build.css": "src/smorgasbord.less",
                    "sandbox/smorgasbord-build.css": "src/smorgasbord.less"
                }
            },
            production: {
                options: {
                    paths: ["src"]
                },
                files: {
                    "dist/smorgasbord.css": "src/smorgasbord.less"
                }
            }
        },
            
        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        },
        
        devserver: {
            server: {},
            options: {
                port: 8080,
                base: "sandbox/",
                async: false
            }
        },
        
        watch: {
            scripts: {
                files: ['src/**/*', 'sandbox/**/*'],
                tasks: ['bowercopy', 'less:development', 'karma'],
                options: {
                    spawn: false
                }
            }
        }
        
    });

    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-devserver");
    grunt.loadNpmTasks("grunt-contrib-watch");
    
    grunt.registerTask("default", ["bowercopy:test", "bowercopy:sandbox", "less:development", "karma"]);
    grunt.registerTask("production", ["less:production"]);
    grunt.registerTask("dev", ["bowercopy:test", "bowercopy:sandbox", "less:development", "karma", "devserver", "watch"]);
};
