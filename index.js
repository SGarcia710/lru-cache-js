const LRU = require("./LRU");

// let lruCache = new LRU(3);
// lruCache.write("a", 123);
// lruCache.write("b", 456);
// lruCache.write("c", 789);

// lruCache.forEach((node, counter) => console.log(counter, node.key, node.value));
// console.log(lruCache.read("a")); // output 123
// lruCache.forEach((node, counter) => console.log(counter, node.key, node.value));
// console.log(lruCache.read("b")); // output 123
// lruCache.forEach((node, counter) => console.log(counter, node.key, node.value));
// console.log(lruCache.read("a")); // output 123
// lruCache.forEach((node, counter) => console.log(counter, node.key, node.value));
// console.log(lruCache.read("c")); // output 123
// lruCache.forEach((node, counter) => console.log(counter, node.key, node.value));

// // Now max limit 3 is reached. Let's add a new element
// lruCache.write("d", 0);
// lruCache.forEach((node, counter) => console.log(counter, node.key, node.value));
