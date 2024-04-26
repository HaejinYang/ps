// 첫 번째 접근. DFS, 재귀함수 62.5점, 에러는 모두 시간초과
#include <string>
#include <vector>
#include <map>
#include <iostream>

using namespace std;
/**
    x에 더하기 2곱하기 3곱하기 3가지 경우
    x1 x2 x3
    
    x1에 더하기 2곱하기 3곱하기 3가지 경우...
*/

int gMin = 1000001;
map<int, int> gMap;

void solveRecursively(int x, int y, int n, int count, int depth) {
    if(gMap[x] != 0 && gMap[x] < depth) {
        return;
    }
    
    ++count;
    if(count > gMin) {
        return;
    }
    
    if(x > y) {
        return;
    }
    
    if(x == y) {
        if(gMin > count) {
            gMin = count;
        }
        
        return;
    }
    
    if(gMap[x + n] == 0) {
        gMap[x+n] = depth + 1;
    }
    
    if(gMap[x * 2] == 0) {
        gMap[x*2] = depth + 1;
    }
    
    if(gMap[x * 3] == 0) {
        gMap[x*3] = depth + 1;
    }
    
    // 보기로 예약된거나 다름 없다.
    solveRecursively(x + n, y, n, count, depth + 1);    
    solveRecursively(x * 2, y, n, count, depth + 1);
    solveRecursively(x * 3, y, n, count, depth + 1);
}

int solution(int x, int y, int n) {
    solveRecursively(x, y, n, -1, 1);
    
    int answer = gMin;
    if(answer == 1000001) {
        answer = -1;
    }
    
    return answer;
}

/**
    첫 번째 시도를 DFS와 재귀로 시도했다. 62.5점. 에러는 모두 시간초과.
    힌트를 보고 bfs로 하고, 뒤에서 앞으로 가봄
*/
#include <string>
#include <vector>
#include <iostream>
#include <set>
#include <queue>

using namespace std;

set<int> gVisited;

int next(int y, int op, int n) {
    switch(op) {
        // -5
        case 1:
            return y - n;
        // / 2
        case 2:
            {
                if((y % 2) == 0) {
                    return y / 2;
                } else {
                    return -1;
                }
            }
        // / 3
        case 3:
            {
                if((y % 3) == 0) {
                    return y / 3;
                } else {
                    return -1;
                }
            }
        break;
    }
}

int solution(int x, int y, int n) {
    queue<int> q;
    q.push(y);
    const int MAX = 1000001;
    int answer = MAX;
    int depth = 0;
    while(!q.empty()) {
        int size = q.size();
        int count = 0;
        while(count < size) {
            ++count;
            int y = q.front();
            q.pop();
            
            if(y == x) {
                if(depth < answer) {
                    answer = depth;
                }
            }
            
            int cand1 = next(y, 1, n);
            int cand2 = next(y, 2, n);
            int cand3 = next(y, 3, n);

            if(gVisited.count(cand1) == 0 && cand1 >= x) {
                gVisited.insert(cand1);
                q.push(cand1);
            }

            if(gVisited.count(cand2) == 0 && cand2 >= x) {
                gVisited.insert(cand2);
                q.push(cand2);
            }

            if(gVisited.count(cand3) == 0 && cand3 >= x) {
                gVisited.insert(cand3);
                q.push(cand3);
            }
        }
        
        ++depth;
    }
    
    return answer == MAX ? -1 : answer;
}