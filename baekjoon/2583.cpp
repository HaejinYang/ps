/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <cstring>
#include <vector>
#include <algorithm>

constexpr int MAX_ROW_SIZE = 100;
constexpr int MAX_COL_SIZE = 100;

int gMap[MAX_ROW_SIZE][MAX_COL_SIZE];
bool gVisited[MAX_ROW_SIZE][MAX_COL_SIZE];
std::vector<int> gDividedArea;
int gCurrentArea = 0;
void dfs(int x, int y, int MAX_ROW, int MAX_COL)
{
    gVisited[y][x] = true;
    gCurrentArea++;
    
    int dx[] = {0, 1, 0, -1};
    int dy[] = {-1, 0, 1, 0};
    constexpr int directVectorSize = 4;
    for(int i = 0; i < directVectorSize; i++)
    {
        int nextX = x + dx[i];
        int nextY = y + dy[i];
        
        if(nextX < 0 || nextY < 0 || nextX >= MAX_COL || nextY >= MAX_ROW)
        {
            continue;
        }
        
        if(gMap[nextY][nextX] == 1)
        {
            continue;
        }
        
        if(gVisited[nextY][nextX])
        {
            continue;
        }
        
        dfs(nextX, nextY, MAX_ROW, MAX_COL);
    }
}

int main()
{
    std::memset(gMap, 0, sizeof gMap);
    std::memset(gVisited, 0, sizeof gVisited);
    
    int N, M, K;
    std::cin >> N >> M >> K;
    
    //연결된 컴포넌트, dfs
    for(int i = 0; i < K; i++)
    {
        int leftBottomX, leftBottomY, rightTopX, rightTopY;
        std::cin >> leftBottomX >> leftBottomY >> rightTopX >> rightTopY;
        
        for(int j = leftBottomY; j < rightTopY; j++)
        {
            for(int k = leftBottomX; k < rightTopX; k++)
            {
                gMap[j][k] = 1;
            }
        }
    }
    
    int dividedAreaCount = 0;
    for(int i = 0; i < N; i++)
    {
        for(int j = 0; j < M; j++)
        {
            if(gMap[i][j] == 0 && !gVisited[i][j])
            {
                dfs(j, i, N, M);
                gDividedArea.push_back(gCurrentArea);
                gCurrentArea = 0;
                dividedAreaCount++;
            }
        }
    }
    
    std::cout << dividedAreaCount << '\n';
    std::sort(gDividedArea.begin(), gDividedArea.end());
    for(int area : gDividedArea)
    {
        std::cout << area << ' ';
    }
    

    return 0;
}