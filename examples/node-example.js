#!/usr/bin/env node 

// declare an simple example class
var Something	= function(a, b){
	this._foo	= 'bar'+(a+b)
}
Something.prototype.getFoo	= function(){
	return this._foo
}


var mixinCreatorPattern = require('../creatorpattern.js');
console.dir(mixinCreatorPattern)

// used with a specified name
mixinCreatorPattern(Something, 'Something')
// mixinCreatorPattern(Something)

var something	= Something.create(2,1)

// sanity check
console.assert(something instanceof Something)
console.assert(something.getFoo() === 'bar3');

// log the result
console.log('foo is', something.getFoo());
console.dir(something);
