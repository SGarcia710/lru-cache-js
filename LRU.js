class Node {
  constructor(key, value, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class LRU {
  // Default limit is 100 if it is not passed.
  constructor(limit = 100) {
    this.limit = limit;
    this.start = null;
    this.end = null;
    this.cache = new Map();
  }

  // Get entry from cache map and make that node as new Head of LinkedList
  getEntry(key) {
    if (this.cache.has(key)) {
      const entry = this.cache.get(key);
      // Entry removed from it's position and cache
      this.removeEntry(entry);
      // write entry again to the head of double LinkedList to make it most recently used
      this.addEntryToTop(entry);

      return entry.value;
    }

    console.log(`The entry ${key} doesn't exist on the cache.`);
    return -1;
  }

  // Add Entry to head of Doubly LinkedList
  // Update cache with Entry key and Entry reference
  addEntry(key, value) {
    if (this.cache.has(key)) {
      // if key already exist, just update the value and move it to top
      console.log(
        `You have tried to add a key which already exists. ${key} entry was updated.`
      );
      let entry = this.cache.get(key);
      entry.value = value;
      this.removeEntry(entry);
      this.addEntryToTop(entry);
    } else {
      const newEntry = new Node(key, value);
      if (this.cache.size === this.limit) {
        console.log(
          `You have reached the max size, we are going to delete the ${this.end.key} entry.`
        );
        // We have reached maxium size so need to make space for the new entry.
        this.cache.delete(this.end.key);
        this.removeEntry(this.end);
        this.addEntryToTop(newEntry);
      } else {
        this.addEntryToTop(newEntry);
      }
      // Update the cache map
      this.cache.set(key, newEntry);
    }
  }

  addEntryToTop(entry) {
    entry.right = this.start;
    entry.left = null;
    if (this.start !== null) {
      this.start.left = entry;
    }
    this.start = entry;
    if (this.end == null) {
      this.end = this.start;
    }
  }

  removeEntry(entry) {
    if (entry.left !== null) {
      entry.left.right = entry.right;
    } else {
      this.start = entry.right;
    }

    if (entry.right !== null) {
      entry.right.left = entry.left;
    } else {
      this.end = entry.left;
    }
  }

  clearCache() {
    this.start = null;
    this.end = null;
    this.cache.clear();
  }

  // Invokes the callback function with every entry of the chain and the index of the entry.
  forEach(callback) {
    let entry = this.start;
    let counter = 0;
    while (entry) {
      callback(entry, counter);
      entry = entry.right;
      counter++;
    }
  }

  // To iterate over LRU with a 'for...of' loop
  *[Symbol.iterator]() {
    let entry = this.head;
    while (entry) {
      yield entry;
      entry = entry.next;
    }
  }
}

module.exports = LRU;
