/* global require, describe, it */
'use strict';

var mpath = './../lib/sync.js';


// MODULES //

var chai = require( 'chai' ),
	proxyquire = require( 'proxyquire' ),
	pkginfo = require( mpath );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'sync', function tests() {

	it( 'should export a function', function test() {
		expect( pkginfo ).to.be.a( 'function' );
	});

	it( 'should return an object', function test() {
		assert.isObject( pkginfo() );
	});

	it( 'should return a package.json', function test() {
		var expected,
			pkg;

		pkg = pkginfo();
		expected = require( './../package.json' );

		assert.deepEqual( pkg, expected );
	});

	it( 'should return an error if unable to resolve a package.json', function test() {
		var pkginfo,
			pkg;

		pkginfo = proxyquire( mpath, {
			'resolve-app-path': resolve
		});
		pkg = pkginfo();
		assert.isTrue( pkg instanceof Error );

		function resolve() {
			return 'beepboopbopbap';
		}
	});

});
