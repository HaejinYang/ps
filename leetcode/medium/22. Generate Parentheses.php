class Solution {

    /**
     * @param Integer $n
     * @return String[]
     */
    function generateParenthesis($n) { 
        // o c
        // o o c c
        // o o c c o c
        // o c ccc 이런건 안됨..
        // 그러면
        // o o 다음에 o가 나올 수도 있고 c가 나올 수도 있는데 이건 어떻게 처리하지 흠....
        $result = [];
        $generator = function ($n, $depth, $parentheses, $openCount, $closeCount) use(&$generator, &$result) {
            if($depth === 0) {
                $result[] = $parentheses;

                return;
            }

            if($openCount < $n) {
                $next = $parentheses . "(";
                $generator($n, $depth - 1, $next, $openCount + 1, $closeCount);
                $next = rtrim($next, "(");
            }
            
            if($closeCount < $openCount) {
                $next = $parentheses . ")";
                $generator($n, $depth - 1, $next, $openCount, $closeCount + 1);
                $next = rtrim($next, ")");
            }
        };

        $generator($n, $n * 2, "", 0, 0);

        return $result;
    }
}