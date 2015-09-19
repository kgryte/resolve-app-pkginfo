'use strict';

// MODULES //

var readJSON = require( 'utils-fs-read-json' ),
	path = require( 'path' ),
	resolve = require( 'resolve-app-path' );


// PKGINFO //

/**
* FUNCTION: pkginfo()
*	Resolves an application's `package.json`.
*
* @returns {Object|Error} `package.json` or an error
*/
function pkginfo() {
	var root, file;
	root = resolve();
	file = path.join( root, 'package.json' );
	return readJSON.sync( file );
} // end FUNCTION pkginfo()


// EXPORTS //

module.exports = pkginfo;
