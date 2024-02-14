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
class Solution {

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function sumNumbers($root) {
        assert($root !== null);

        $result = $this->DFS($root, 0);

        return $result;
    }

    function DFS($node, $sum) {
        assert($node !== null);
        
        $leftSum = 0;
        $rightSum = 0;

        if($node->left) {
            $leftSum = $this->DFS($node->left, $sum * 10 + $node->val);
        }

        if($node->right) {
            $rightSum = $this->DFS($node->right, $sum * 10 + $node->val);
        }

        if(!$node->left && !$node->right) {
            return $sum * 10 + $node->val;
        }

        return $leftSum + $rightSum;
    }
}

// 익명함수로
function sumNumbers($root) {
        assert($root !== null);

        $dfs = function ($node, $sum) use(&$dfs) {
            assert($node !== null);
            
            $leftSum = 0;
            $rightSum = 0;

            if($node->left) {
                $leftSum = $dfs($node->left, $sum * 10 + $node->val);
            }

            if($node->right) {
                $rightSum = $dfs($node->right, $sum * 10 + $node->val);
            }

            if(!$node->left && !$node->right) {
                return $sum * 10 + $node->val;
            }

            return $leftSum + $rightSum;
        };

        $result = $dfs($root, 0);
        return $result;
    }