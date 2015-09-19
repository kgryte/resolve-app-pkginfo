/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	pkginfo = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'resolve-app-pkginfo', function tests() {

	it( 'should export a function', function test() {
		expect( pkginfo ).to.be.a( 'function' );
	});

	it( 'should export a function to synchronously resolve an application\'s package.json', function test() {
		expect( pkginfo.sync ).to.be.a( 'function' );
	});

});
