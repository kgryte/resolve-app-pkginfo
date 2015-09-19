/* global require, describe, it */
'use strict';

var mpath = './../lib/async.js';


// MODULES //

var chai = require( 'chai' ),
	proxyquire = require( 'proxyquire' ),
	pkginfo = require( mpath );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'async', function tests() {

	it( 'should export a function', function test() {
		expect( pkginfo ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a callback function', function test() {
		var values,
			i;

		values = [
			'5',
			5,
			NaN,
			null,
			undefined,
			true,
			[],
			{}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				pkginfo( value );
			};
		}
	});

	it( 'should return a package.json', function test( done ) {
		var expected;

		pkginfo( clbk );
		expected = require( './../package.json' );

		function clbk( error, pkg ) {
			if ( error ) {
				assert.ok( false );
			} else {
				assert.deepEqual( pkg, expected );
			}
			done();
		}
	});

	it( 'should return an error if unable to resolve a package.json', function test( done ) {
		var pkginfo;

		pkginfo = proxyquire( mpath, {
			'resolve-app-path': resolve
		});
		pkginfo( clbk );

		function clbk( error ) {
			if ( error ) {
				assert.ok( true );
			} else {
				assert.ok( false );
			}
			done();
		}

		function resolve() {
			return 'beepboopbopbap';
		}
	});

});
