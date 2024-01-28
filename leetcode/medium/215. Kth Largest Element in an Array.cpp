class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        std::priority_queue<int, std::vector<int>, std::less<int>> q;

        for(const int& e: nums) {
            q.push(e);
        }

        for(int i = 0; i < k - 1; i++) {
            q.pop();
        }

        return q.top();
    }
};