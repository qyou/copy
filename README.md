copy
========
A simple module for copy and deepcopy just like Python copy module

Example
========

```javascript

    const copy = require('copy')

    const aArray = [1,2,3,[4,5,6,[7,8,9]]]
    const bArray = aArray   // [1,2,3,[4,5,6,[7,8,9]]]

    const aArrayCopy = copy.copy(aArray)    // [1,2,3,[4,5,6,[7,8,9]]]
    const aArrayDeepCopy = copy.deepcopy(aArray)    // [1,2,3,[4,5,6,[7,8,9]]]

    bArray[0] = 100
    console.log(aArray) // [100,2,3,[4,5,6,[7,8,9]]]
    console.log(bArray) // [100,2,3,[4,5,6,[7,8,9]]]
    console.log(aArrayCopy) // [1,2,3,[4,5,6,[7,8,9]]]
    console.log(aArrayDeepCopy) // [1,2,3,[4,5,6,[7,8,9]]]
    
    bArray[3][3][0] = 70    
    console.log(aArray)     // [100,2,3,[4,5,6,[70,8,9]]]
    console.log(bArray)     // [100,2,3,[4,5,6,[70,8,9]]]
    console.log(aArrayCopy) // [1,2,3,[4,5,6,[70,8,9]]]
    console.log(aArrayDeepCopy) // [1,2,3,[4,5,6,[7,8,9]]]

    // while object is alike
```

License
=========

MIT License