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
				    "jquery.js": "jquery/dist/jquery.js"
                }
            }
        },
        
        less: {
            development: {
                options: {
                    paths: ["src"]
                },
                files: {
                    "test/smorgasbord-build.css": "src/smorgasbord.less"
                }
            }
        },
            
        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-karma");
    
    grunt.registerTask("default", ["bowercopy", "less", "karma"]);
};
