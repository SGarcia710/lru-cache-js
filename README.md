# JavaScript LRU Cache

This project aims to implement LRU Cache policy with JavaScript. All the implementation is on Vanilla JavaScript and you won't need any transpiler to run it.

## Whats LRU Cache?

LRU cache stand for Least Recently Used Cache, which evicts least recently used entry. As Cache purpose is to provide fast and efficient way of retrieving data. It need to meet certain requirement:

- Fixed Size: Cache needs to have some bounds to limit memory usages.
- Fast Access: Cache Insert and Lookup operation should be fast, preferably O(1) time.
- Replacement of Entry in case: Cache must replaces existing keys.
- Memory Limit is reached: A cache should have efficient algorithm to evict the entry when it have reached its memory limit.

Discards the least recently used items first. This algorithm requires keeping track of what was used when, which is expensive if one wants to make sure the algorithm always discards the least recently used item.

So, this implementation of LRU cache will use a Map and Doubly Linked List. In which the Map will hold the keys and address of the Nodes of Doubly Linked List.

You can read more about this in the references at the end of this document.

## Requirements:

- **Nodejs** version 12.16.1 LTS

## Dependencies:

- [**ms**](https://www.npmjs.com/package/ms): This package is used for handling with time using friendly time formats.

## How to use

In order to use this code you will have to run the following commands in your console:

```
git clone https://github.com/SGarcia710/lru-cache-js
cd lru-cache-js
npm install
npm start
```

### Usage

```
const LRU = require("./LRU");

let lruCache = new LRU(10, "2s", "3s");
// 10 entries, 2 seconds as Maximum TTL for entries,
// and 3 seconds as time for the Purge Interval

lruCache.addEntry("a", 123);
lruCache.addEntry("b", 456, "5s");
lruCache.addEntry("c", 789);

// After 4 seconds
setTimeout(() => {
	console.log(lruCache.getEntry("a")); // -1
	console.log(lruCache.getEntry("b")); // 456
	console.log(lruCache.getEntry("c")); // -1
}, 4000);
```

## Todo

- [ ] Unit Testing
- [ ] Post on NPM

## References

- [https://github.com/alxarch/map-cache-ttl](https://github.com/alxarch/map-cache-ttl)
- [http://www.ronniesan.com/using-lru-cache-in-nodejs/](http://www.ronniesan.com/using-lru-cache-in-nodejs/)
- [https://dev.to/udayvunnam/implementing-lru-cache-in-javascript-3c8g](https://dev.to/udayvunnam/implementing-lru-cache-in-javascript-3c8g)
- [https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)
- [https://medium.com/@krishankantsinghal/my-first-blog-on-medium-583159139237](https://medium.com/@krishankantsinghal/my-first-blog-on-medium-583159139237)
