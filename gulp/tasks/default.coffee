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


gulp.task 'reload', ->
  browser.reload()



### @watch ###
gulp.task 'watch', ->
  # browserify
  gulp.watch [
    "#{conf.path.src.comp}/**/**"
  ], ['browserify']
  # reload
  gulp.watch [
    "#{conf.path.dest.root}/**/**"
    "!#{conf.path.dest.root}/**/**"
  ], ['reload']












