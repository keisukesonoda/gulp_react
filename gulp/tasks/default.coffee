gulp = require 'gulp'
conf = require '../config'

### @default ###
gulp.task 'default', ['browserify', 'server', 'watch']




### @server ###
browser = require 'browser-sync'

gulp.task 'server', ->
	browser({
		server:
			baseDir: [
				"#{conf.path.dest.root}"
			]
		port: 8000
		open: false
		reloadDelay: conf.params.reloadDelay
	})




### @watch ###
gulp.task 'watch', ->
	# jsx
	gulp.watch [
		"#{conf.path.src.comp}/**/**"
		], ['browserify']
	# reload
	# gulp.watch "#{conf.path.src.root}/**", ['reload']






