import BloomFilter from "./BloomFilter";
import { preorderTraverse } from "./DepthFirstTraversals";

// Breadth First Traversal
const tree = {
    value: 8,
    left: {
        value: 4,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: {
                value: 7,
                left: {
                    value: 6,
                    left: null,
                    right: null
                }
            }
        }
    },
    right: {
        value: 12,
        left: {
            value: 10,
            left: {
                value: 9,
                left: null,
                right: null
            },
            right: {
                value: 11,
                left: null,
                right: null
            }
        }
    }
};
console.log(':::::', tree);
console.log('::::: array', preorderTraverse(tree, []));

// Bloom Filters
// let bf = new BloomFilter();
// console.log(':::::', bf.add('test'));
// console.log(':::::', bf.contains('test'));
// console.log(':::::', bf.contains('tests'));