/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <cstring>

constexpr int COL_SIZE = 50;
constexpr int ROW_SIZE = 50;
int gMap[ROW_SIZE][COL_SIZE];
bool gVisited[ROW_SIZE][COL_SIZE];

void dfs(int x, int y, int MAX_X, int MAX_Y)
{
    gVisited[y][x] = true;
    
    int dx[] = {0, 1, 0, -1};
    int dy[] = {-1, 0, 1, 0};
    constexpr int directVectorSize = 4;
    for(int i = 0; i < directVectorSize; i++)
    {
        int nextX = x + dx[i];
        int nextY = y + dy[i];
        
        if(nextX < 0 || nextY < 0 || nextY >= MAX_Y || nextX >= MAX_X)
        {
            continue;
        }
        
        if(gMap[nextY][nextX] == 0)
        {
            continue;
        }
        
        if(gVisited[nextY][nextX])
        {
            continue;
        }
        
        dfs(nextX, nextY, MAX_X, MAX_Y);
    }
}

int main()
{
    // 연결된 컴포넌트를 모두 찾으면 됨
    int testCaseCount;
    std::cin >> testCaseCount;
    while(testCaseCount--)
    {
        std::memset(gMap, 0, sizeof gMap);
        std::memset(gVisited, 0, sizeof gVisited);
        int result = 0;
        int col, row, vegetableCount;
        std::cin >> col >> row >> vegetableCount;
        for(int i = 0; i < vegetableCount; i++)
        {
            int x, y;
            std::cin >> x >> y;
            
            gMap[y][x] = 1;
        }
        
        for(int i = 0; i < row; i++)
        {
            for(int j = 0; j < col; j++)
            {
                if(!gVisited[i][j] && gMap[i][j] != 0)
                {
                    dfs(j, i, col, row);
                    ++result;
                }
            }
        }
        
        std::cout << result << '\n';
    }
  
    return 0;
}