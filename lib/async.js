'use strict';

// MODULES //

var readJSON = require( 'utils-fs-read-json' ),
	path = require( 'path' ),
	resolve = require( 'resolve-app-path' ),
	isFunction = require( 'validate.io-function' );


// PKGINFO //

/**
* FUNCTION: pkginfo( clbk )
*	Resolves an application's `package.json`.
*
* @param {Function} clbk - callback invoked upon resolving a `package.json`
* @returns {Void}
*/
function pkginfo( clbk ) {
	var root,
		file;

	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Must provide a callback function. Value: `' + clbk + '`.' );
	}
	root = resolve();
	file = path.join( root, 'package.json' );

	readJSON( file, onData );

	/**
	* FUNCTION: onData( error, data )
	*	Callback invoked after attempting to read an application's `package.json`.
	*
	* @private
	* @param {Error|Null} error - error object
	* @param {Object} data - JSON data
	* @returns {Void}
	*/
	function onData( error, data ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, data );
	}
} // end FUNCTION pkginfo()


// EXPORTS //

module.exports = pkginfo;
