/**
 * Definition for a Node.
 * class Node {
 *     function __construct($val = 0) {
 *         $this->val = $val;
 *         $this->left = null;
 *         $this->right = null;
 *         $this->next = null;
 *     }
 * }
 */

class Solution {
    /**
     * @param Node $root
     * @return Node
     */
    public function connect($root) {
        if(!$root) {
            return;
        }

        $root->next = null;
        $q = [];
        $q[] = $root;

        while(!empty($q)) {
            $currentSize = count($q);

            $prev = null;
            for($i = $currentSize - 1; $i >= 0; $i--) {
                $q[$i]->next = $prev;
                $prev = $q[$i];
            }

            for($i = 0; $i < $currentSize; $i++) {
                $node = array_shift($q);

                if($node->left) {
                    $q[] = $node->left;
                }

                if($node->right) {
                    $q[] = $node->right;
                }
            }
        }

        return $root;
    }
}