creatorpattern.js
=================

microlib to easily add the creator pattern to your class.
It works in browser and node.js

## how to use it

in node.js

```
var mixinCreatorPattern = require('creatorpattern');
mixinCreatorPattern(FooClass, 'FooClass')
```

in your browser

```
mixinCreatorPattern(FooClass, 'FooClass')
```


## how to include it

in node.js

```
 npm install creatorpattern.js
```

in your browser

```
 <script src='creatorpattern.js'></script>
```

## api

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
