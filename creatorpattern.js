/**
 * mixin for the creator pattern
 * 
 * @param  {Function} klass the constructor function of the class
 * @param  {String|undefined} name  the name of the class
 */
var mixinCreatorPattern	= function(klass, name){
	// js code for the creator pattern
	var jsCode	= [
		"klass.create = (function() {",
		"	function F(args) {",
		"		return klass.apply(this, args);",
		"	}",
		"	F.prototype = klass.prototype;",
		"	return function(){",
		"		return new F(arguments);",
		"	}",
		"})()",
	].join('\n')
	// handle klass name default value
	// - if the name isnt explicitly given, get the name of the constructor function
	name	= name || klass.name
	// replace the F class with the proper name
	jsCode	= name ? jsCode.replace(/F/g, name) : jsCode
	// eval the code
	eval(jsCode)
};

// export for node.js
if( window === undefined )	module.exports	= mixinCreatorPattern;