const LRU = require("./LRU");

let lruCache = new LRU(3);
lruCache.getEntry("hola");

lruCache.addEntry("a", 123);
lruCache.addEntry("b", 456);
lruCache.addEntry("c", 789);
lruCache.addEntry("c", 0);

lruCache.forEach((entry, counter) => console.log(entry.key, entry.value));
console.log("MRU -> a ->", lruCache.getEntry("a"));
lruCache.forEach((entry, counter) => console.log(entry.key, entry.value));
