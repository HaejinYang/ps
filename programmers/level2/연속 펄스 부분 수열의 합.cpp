#include <string>
#include <vector>
#include <iostream>
#include <cmath>

using namespace std;

// 1 5 -1 100 이라고 한다면, 가장 큰 부분수열의 값은 얼마지? 1 5 -1 100인가?
// 합을 더하다가, 음수를 만났으면, 이전합과 음수를 더해서 음수가 나오면 이전합을 버리고 음수 다음 인덱스부터 새로 시작
// 이전 합은 맥스가 된다

// 
// 2 3 -6 1 3 -1 2 4
// 5 -2 3 6 1 3 -1 2 4
// -2 3 6 1 3
// 이전 합과 현재 값을 더했는데, 현재값보다 크거나 같다면, 가져가도 되네?

long long getMax(vector<int>& v) {
    long long max = v[0];
    long long sum = max;
    for(int i = 1; i < v.size(); i++) {
        if(sum + v[i] >= v[i]) {            
            sum += v[i];
            if(sum > max) {
                max = sum;
            }
        } else {
            sum = v[i];
        }
    }
    
    if(sum > max) {
        max = sum;
    }
    
    return max;
}

long long solution(vector<int> sequence) {
    if(sequence.size() == 1) {
        return abs(sequence[0]);
    }
    
    long long answer = 0;
    
    // first와 second에서 가장 큰 값을 찾고, 이 둘중에 큰값을 반환.
    int mul = 1;
    vector<int> first;
    
    for(const auto e: sequence) {
        first.push_back(e*mul);
        mul *= -1;
    }
    
    long long firstMax = getMax(first);
    
    mul = -1;
    vector<int> second;
    for(const auto e: sequence) {
        second.push_back(e*mul);
        mul *= -1;
    }
    
   long long secondMax = getMax(second);
    
    std::cout << secondMax << std::endl;
    
    return max(firstMax, secondMax);
}

