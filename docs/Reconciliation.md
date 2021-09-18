
the [state of the art algorithms](https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf) have a complexity in the order of O(n3) where n is the number of elements in the tree.

React implements a heuristic O(n) algorithm based on two assumptions:

1.  Two elements of different types will produce different trees.
2.  The developer can hint at which child elements may be stable across different renders with a  `key`  prop.
3.
## The Diffing Algorithm

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.
