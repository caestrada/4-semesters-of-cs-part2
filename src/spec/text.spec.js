import BloomFilter from "../BloomFilter";
import { preorderTraverse, inorderTraverse, postorderTraverse } from "../DepthFirstTraversals";
import { breadthFirstTraverse, breadthFirstTraverseRecursive } from "../BreadthFirstTraversals";


// unit tests
// do not modify the below code
describe('BloomFilter', function() {
    let bf;
    beforeEach(() => {
        bf = new BloomFilter();
    })
    it('returns false when empty', () => {
        expect(bf.contains("Brian")).toBe(false);
        expect(bf.contains("Sarah")).toBe(false);
        expect(bf.contains("Simona")).toBe(false);
    });
    it('handles one item', () => {
        expect(bf.contains("Brian")).toBe(false);
        bf.add("Brian");
        expect(bf.contains("Brian")).toBe(true);
        expect(bf.contains("Sarah")).toBe(false);
        expect(bf.contains("Simona")).toBe(false);
    });
    it('handles many items', () => {
        const names = ["Brian", "Simona", "Sarah", "Asim", "John", "Sean", "Jessie", "Paige", "Ashley"];
        names.forEach((item) => bf.add(item));
        names.forEach((item) => expect(bf.contains(item)).toBe(true));
        ["Sam", "Chris", "Taylor", "Florence"].forEach((item) => expect(bf.contains(item)).toBe(false));
    });
});

// Depth First Traversals
describe('tests', function() {

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

    it('preorderTraverse', () => {
        expect(preorderTraverse(tree, [])).toEqual([8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]);
    });

    it('inorderTraverse', () => {
        expect(inorderTraverse(tree, [])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });

    it('postorderTraverse', () => {
        expect(postorderTraverse(tree, [])).toEqual([2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]);
    });
});


// Breadth First Traversals
// unit tests
// do not modify the below code
describe('tests', function() {
    const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

    const tree = {
        value: "A",
        left: {
            value: "B",
            left: {
                value: "D",
                left: {
                    value: "G",
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: "E",
                left: null,
                right: {
                    value: "H",
                    left: {
                        value: "K",
                        left: null,
                        right: null
                    }
                }
            }
        },
        right: {
            value: "C",
            left: {
                value: "F",
                left: {
                    value: "I",
                    left: null,
                    right: null
                },
                right: {
                    value: "J",
                    left: null,
                    right: null
                }
            },
            right: null
        }
    };

    it('breadthFirstTraverse - iterable', () => {
        expect(breadthFirstTraverse([tree], [])).toEqual(answer);
    });

    it('breadthFirstTraverse - recursive', () => {
        expect(breadthFirstTraverseRecursive([tree], [])).toEqual(answer);
    });
});