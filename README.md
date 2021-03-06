creatorpattern.js
=================

Micro Library to easily add the creator pattern to your class.
It works in browser and node.js

## How To Use It

to mixin the creator pattern in a class ```FooClass`, do the following in node.js

```
var mixinCreatorPattern = require('creatorpattern');
mixinCreatorPattern(FooClass, 'FooClass')
```

or do the following in your browser

```
mixinCreatorPattern(FooClass, 'FooClass')
```

After that, ```FooClass``` honor the creator pattern. so instead of

```
var foo = new FooClass(2,1)
```

you can do 

```
var foo	= FooClass.create(2,1);
```

## How To Include It

in node.js

```
 npm install creatorpattern.js
```

in your browser

```
 <script src='creatorpattern.js'></script>
```

## API

It includes a single function ```mixinCreatorPattern(constructorFunction, nameOfClass)```

```
mixinCreatorPattern(FooClass, 'FooClass')
```

* the first parameter ```FooClass``` is the contructor of your class.
* The second parameter ```'FooClass'``` is optional and is the name of the class in string.
It does its best to keep the name of the class. Thus 
when you display your variables in the js console, you will see the
proper name.
If the name isn't provided, it will take the function name of the
constructor function. If there is none, the name won't be kept
