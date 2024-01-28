class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        std::priority_queue<int, std::vector<int>, std::greater<int>> q;

        for(const auto& v : matrix) {
            for(const auto& item: v) {
                q.push(item);
            }
        }

        for(int i = 0; i < k - 1; i++) {
            q.pop();
        }

        return q.top();
    }
};