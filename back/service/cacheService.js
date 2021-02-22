module.exports = new (class CacheService {
    constructor() {
        this.caches = new Map();
    }

    setCache(key, value) {
        if (this.caches.has(key)) this.caches.delete(key);
        this.caches.set(key, value);
    }

    getLatest(length) {
        let count = 0;
        let valuesToReturn = [];
        this.caches.forEach(function (value, key) {
            if (count < length) {
                valuesToReturn.push(value);
            }
            count++;
        });
        return valuesToReturn;
    }
})();
