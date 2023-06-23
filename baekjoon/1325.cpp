#include <iostream>
#include <vector>
#include <cstring>

const int LENGTH = 10001;
std::vector<int> gGraph[LENGTH];
bool gVisited[LENGTH];
std::vector<int> gAnswer;
int dfs(int node) {
	gVisited[node] = true;
	int ret = 1;
	
	for(const auto e : gGraph[node]) {
		if(gVisited[e]) {
			continue;
		}	
		
		ret += dfs(e);
	}
	
	return ret;
}

int main() {
	int N, M;
	
	std::cin >> N >> M;
	int inputCount = 0;
	while(inputCount < M) {
		int from, to;
		std::cin >> from >> to;
		gGraph[to].push_back(from);
		inputCount++;
	}
	
	int max = 0;
	for(int i = 1; i < LENGTH; i++) {
		memset(gVisited, false, sizeof(gVisited[0])*LENGTH);
		int ret = dfs(i);
		if(ret > max) {
			max = ret;
			gAnswer.clear();
			gAnswer.push_back(i);
		} else if(ret == max) {
			gAnswer.push_back(i);
		}
		
	}
	
	for(const auto e : gAnswer) {
		std::cout << e << " ";
	}
	
	return 0;
}