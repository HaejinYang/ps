/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
 
 // 이 풀이는 다른 솔루션을 참고했다...
 
class Solution {
    public $prev;
    public $first;
    public $second;

    function __construct() {
        $this->prev = null;
        $this->first = null;
        $this->second = null;
    }
    /**
     * @param TreeNode $root
     * @return NULL
     */
    function recoverTree($root) {
        $this->inorder($root);

        $temp = $this->first->val;
        $this->first->val = $this->second->val;
        $this->second->val = $temp;
    }

    function inorder($node) {
        if($node->left) {
            $this->inorder($node->left);
        }

        if($this->first && $this->prev && $this->prev->val > $node->val) {
            $this->second = $node;

            return;
        }
        
        if(!$this->first && $this->prev && $this->prev->val > $node->val) {
            $this->first = $this->prev;
            $this->second = $node;
        }

        $this->prev = $node;

        if($node->right) {
            $this->inorder($node->right);
        }
    }
}