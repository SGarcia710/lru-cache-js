const LRU = require("./LRU");

let lruCache = new LRU(3);
lruCache.write("a", 123);
lruCache.write("b", 456);
lruCache.write("c", 789);
lruCache.read("a"); // output 123

// Now max limit 3 is reached. Let's add a new element
lruCache.write("d", 0);
