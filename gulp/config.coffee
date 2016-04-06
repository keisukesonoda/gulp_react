# directories
# --------------------
dir =
	app: 'app'
	src: 'lib'
	dest: 'public'
	comp: 'components'


# path
# --------------------
path =
	src:
		root: "#{dir.app}/#{dir.src}"
		comp: "#{dir.app}/#{dir.src}/#{dir.comp}"
	dest:
		root: "#{dir.app}/#{dir.dest}"


# paramaters
# --------------------
params =
	reloadDelay: 400






# exports
# --------------------
module.exports = 
	dir: dir
	path: path
	params: params
