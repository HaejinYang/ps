/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <cstring>

constexpr int ROW_LENGTH_MAX = 100;
int gMap[ROW_LENGTH_MAX][ROW_LENGTH_MAX];
bool gVisited[ROW_LENGTH_MAX][ROW_LENGTH_MAX];

void dfs(int x, int y, int MAX_X, int MAX_Y, int height)
{
    gVisited[y][x] = true;
    
    int dx[] = {0, 1, 0, -1};
    int dy[] = {-1, 0, 1, 0};
    constexpr int directionCount = 4;
    for(int i = 0; i < directionCount; i++)
    {
        int nextX = x + dx[i];
        int nextY = y + dy[i];
        
        if(nextX < 0 || nextY < 0 || nextX >= MAX_X || nextY >= MAX_Y)
        {
            continue;
        }
        
        if(gMap[nextY][nextX] <= height)
        {
            continue;
        }
        
        if(gVisited[nextY][nextX])
        {
            continue;
        }
        
        dfs(nextX, nextY, MAX_X, MAX_Y, height);
    }
}

int main()
{
    // 연결된 컴포넌트
    // 1부터 MAX까지 돌면서 연결된 컴포넌트를 구하면 됨.
    std::memset(gMap, 0, sizeof gMap);
    
    int N;
    std::cin >> N;
    int maxHeight = 0;
    for(int i = 0; i < N; i++)
    {
        for(int j = 0; j < N; j++)
        {
            std::cin >> gMap[i][j];
            maxHeight = std::max(gMap[i][j], maxHeight);
        }
    }
    
    int maxSafeZoneCount = 0;
    int height = 0;
    while(height <= maxHeight)
    {
        std::memset(gVisited, 0, sizeof gVisited);
        int currentSafeZoneCount = 0;
        for(int i = 0; i < N; i++)
        {
            for(int j = 0; j < N; j++)
            {
                if(!gVisited[i][j] && gMap[i][j] > height)
                {
                    dfs(j, i, N, N, height);
                    currentSafeZoneCount++;
                }
            }
        }
        
        maxSafeZoneCount = std::max(maxSafeZoneCount, currentSafeZoneCount);
        height++;
    }
    
    std::cout << maxSafeZoneCount << '\n';

    return 0;
}