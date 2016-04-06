gulp       = require 'gulp'
conf       = require '../config'
browserify = require 'browserify'
babelify   = require 'babelify'
source     = require 'vinyl-source-stream'
plumber    = require 'gulp-plumber'
browser    = require 'browser-sync'




gulp.task 'browserify', ->
	browserify("#{conf.path.src.comp}/app.js", { debug: true })
		# jsx
		# .transform babelify.configure({
		# 	presets: ["react"]
		# 	})
		# es6
		.transform babelify, { presets: ['es2015'] }

		.bundle()
		# .on('error', (err) ->
		# 	console.log 'Error : ' + err.message
		# 	)
		.pipe plumber({
			handleError: (err) ->
				console.log 'Error : ' + err
			})
		.pipe source 'bundle.js'
		.pipe gulp.dest "#{conf.path.dest.root}"
		.pipe browser.reload({ stream: true })


