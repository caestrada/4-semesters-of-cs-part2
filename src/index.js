import BloomFilter from "./BloomFilter";

let bf = new BloomFilter();
console.log(':::::', bf.add('test'));
console.log(':::::', bf.contains('test'));
console.log(':::::', bf.contains('tests'));