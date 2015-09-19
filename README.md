pkginfo
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Resolves an application's `package.json`.


## Installation

``` bash
$ npm install resolve-app-pkginfo
```


## Usage

``` javascript
var pkginfo = require( 'resolve-app-pkginfo' );
```

#### pkginfo( clbk )

Resolves an application's `package.json`.

``` javascript
pkginfo( done );

function done( error, pkg ) {
	if ( error ) {
		throw error;
	}
	console.dir( pkg );
}
```


#### pkginfo.sync()

Synchronously resolves an application's `package.json`.

``` javascript
var pkg = pkginfo.sync();

if ( pkg instanceof Error ) {
	throw pkg;
}
console.dir( pkg );
```


## Notes

* 	This module relies on [resolve-app-path](https://github.com/kgryte/resolve-app-path) to resolve an application's root directory.



## Examples

``` javascript
var pkginfo = require( 'resolve-app-pkginfo' );

var pkg = pkginfo.sync();

console.log( 'Name: %s', pkg.name );
console.log( 'Version: %s', pkg.version );
console.log( 'Description: %s', pkg.description );
console.log( 'Author: %s', pkg.author.name );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/resolve-app-pkginfo.svg
[npm-url]: https://npmjs.org/package/resolve-app-pkginfo

[travis-image]: http://img.shields.io/travis/kgryte/resolve-app-pkginfo/master.svg
[travis-url]: https://travis-ci.org/kgryte/resolve-app-pkginfo

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/resolve-app-pkginfo/master.svg
[codecov-url]: https://codecov.io/github/kgryte/resolve-app-pkginfo?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/resolve-app-pkginfo.svg
[dependencies-url]: https://david-dm.org/kgryte/resolve-app-pkginfo

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/resolve-app-pkginfo.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/resolve-app-pkginfo

[github-issues-image]: http://img.shields.io/github/issues/kgryte/resolve-app-pkginfo.svg
[github-issues-url]: https://github.com/kgryte/resolve-app-pkginfo/issues
