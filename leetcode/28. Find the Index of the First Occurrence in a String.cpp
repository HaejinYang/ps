class Solution {
public:
    int strStr(string haystack, string needle) {
        const int haystackLength = haystack.size();
        const int needleLength = needle.size();
        int matchCount = 0;
        int answer = -1;
        for(int i = 0; i < haystackLength; i++) {
            matchCount = 0;
            for(int j = 0; j < needleLength; j++) {
                if((i + j) < haystackLength && haystack[i + j] == needle[j]) {
                    ++matchCount;
                } else {
                    break;
                }
            }

            if(matchCount == needleLength) {
                answer = i;

                break;
            }
         }

         return answer;
    }
};