const LRU = require("./LRU");

let lruCache = new LRU(null, "2s", "3s");
lruCache.addEntry("a", 123);
lruCache.addEntry("b", 456);
lruCache.addEntry("c", 789);
console.log(lruCache.expires);
console.log(lruCache.cache);

setTimeout(() => {
  console.log("Cache limpiado correctamente");
  console.log(lruCache.expires);
  console.log(lruCache.cache);
}, 5000);
