class Solution {
public:
    int lengthOfLastWord(string s) {
        int answer = 0;
        int prev = 0;
        for(int i = 0; i < s.length(); i++) {
            if(s[i] == ' ') {
                if(answer != 0) {
                    prev = answer;
                }
                
                answer = 0;
            } else {
                answer++;
            }
        }

        if(answer == 0) {
            answer = prev;
        }

        return answer;
    }
};