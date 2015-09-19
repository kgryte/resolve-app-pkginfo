'use strict';

var pkginfo = require( './../lib' );

var pkg = pkginfo.sync();

console.log( 'Name: %s', pkg.name );
console.log( 'Version: %s', pkg.version );
console.log( 'Description: %s', pkg.description );
console.log( 'Author: %s', pkg.author.name );
