const LRU = require("./LRU");

let lruCache = new LRU(null, "2s", "3s");
lruCache.addEntry("a", 123);
lruCache.addEntry("b", 456, "5s");
lruCache.addEntry("c", 789);

setTimeout(() => {
  console.log(lruCache.getEntry("a")); // -1
  console.log(lruCache.getEntry("b")); // 456
  console.log(lruCache.getEntry("c")); // -1
}, 4000);
