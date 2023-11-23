class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Float
     */
    function findMedianSortedArrays($lhs, $rhs) {
        /**
            lhs와 rhs의 아이템 크기를 비교해가면서 인덱스를 증가
            어느 순간에 멈추추지?
            두 배열 사이즈 합 1/2.
            2, 1 => 1
            2, 2 => 1, 2
            2, 3 => 2
            3, 3 => 2, 3
            3, 4 => 3
            (ceil(두 배열 사이즈합 / 2) - 1)
            그리고 odd, even 구별해서 인덱스 증가
        */

        $lhsIndex = 0;
        $rhsIndex = 0;
        $lhsSize = count($lhs);
        $rhsSize = count($rhs);
        $targetIndex = (ceil(($lhsSize + $rhsSize) / 2)) - 1;
        $countIndex = 0;
        $left = 0;
        $right = 0;
        $current = 0;
        while(true) {
            if($lhsIndex < $lhsSize && $rhsIndex < $rhsSize) {
                if($lhs[$lhsIndex] < $rhs[$rhsIndex]) {
                    $current = $lhs[$lhsIndex];
                    ++$lhsIndex;
                } else {
                    $current = $rhs[$rhsIndex];
                    ++$rhsIndex;
                }
            } else if($lhsIndex < $lhsSize) {
                $current = $lhs[$lhsIndex];
                ++$lhsIndex;
            } else {
                $current = $rhs[$rhsIndex];
                ++$rhsIndex;
            }

            ++$countIndex;

            if($countIndex == ($targetIndex + 1)) {
                $left = $current;
            } 

            if($countIndex == ($targetIndex + 2)) {
                $right = $current;
                break;
            }
        }
        
        if((($lhsSize + $rhsSize) % 2) === 1) {
            return $left;
        } else {
            return ($left + $right) / 2;
        }
    }
}