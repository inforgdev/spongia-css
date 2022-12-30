const { basename } = require("path");

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        shortName: "spongia",
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            default: {
                files: [
                    {
                        expand: true,
                        src: "src/*.scss",
                        dest: "dest/",
                        rename: (dest, src) => { return dest + basename(src) },
                    }
                ]
            }
        },
        cssmin: {
            default: {
                files: [
                    {
                        dest: 'dist/<%= shortName %>.min.css',
                        src: 'dest/index.scss'
                    }
                ]
            }            
        },
        clean: {
            default: [ 'dist' ],
            dest: [ 'dest' ],
        },
        pug: {
            default: {
                files: [
                    {
                        expand: true,
                        src: "test/*.pug",
                        dest: "test/",
                        rename: (dest, src) => { return dest + basename(src).replace(".pug", ".html") },
                    }
                ]
            }
        },
        watch: {
            main: {
                files: [ "src/*.scss" ],
                tasks: [ 'main:compile' ],
            },
            test: {
                files: [ "test/*.pug" ],
                tasks: [ 'test:compile' ],
            },
        }
    });

    grunt.registerTask('main:compile', [ 'sass', 'cssmin', 'clean:dest' ]);
    grunt.registerTask('main:watch', [ 'watch:main' ]);
    grunt.registerTask('test:compile', [ 'pug' ]);
    grunt.registerTask('test:watch', [ 'watch:test' ]);
    grunt.registerTask('dist:clean', [ 'clean:dist' ]);
}