function HasTable(size) {
  this.values = {}
  this.numberOfValues = 0
  this.size = size
}

// the simplest of hash functions
HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size
}

HashTable.prototype.add = function(key, value) {
  var hash = this.calculateHash(key)
  if (!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {}
  }
  if (!this.values.hasOwnProperty(key)) {
    this.numberOfValues++
  }
  this.values[hash][key] = value
}
