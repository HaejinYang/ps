/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <cstring>
#include <queue>

constexpr int MAX_MAP_LENGTH = 101;
int gMap[MAX_MAP_LENGTH][MAX_MAP_LENGTH];
int gDistance[MAX_MAP_LENGTH][MAX_MAP_LENGTH];

struct Pos
{
    int x;
    int y;
    
    Pos(int x, int y)
    {
        this->x = x;
        this->y = y;
    }
};

int main()
{
    memset(gMap, 0, sizeof gMap);
    memset(gDistance, 0, sizeof gDistance);
    
    int N, M;
    std::cin >> N >> M;
    
    std::string row;
    for(int i = 1; i <= N; i++)
    {
        std::cin >> row;
        
        int col = 1;
        for(char cell : row)
        {
            if(cell == '1')
            {
                gMap[i][col] = 1;
            }
            else
            {
                gMap[i][col] = 0;
            }
            
            col++;
        }
    }
    
    // bfs로 풀어야겟다.
    std::queue<Pos> q;
    q.push({1, 1});
    int dx[] = {0, 1, 0, -1};
    int dy[] = {-1, 0, 1, 0};
    constexpr int MAX_DIRECTION = 4;
    while(!q.empty())
    {
        Pos current = q.front();
        q.pop();
        
        for(int i = 0; i < MAX_DIRECTION; i++)
        {
            Pos next = current;
            next.x = next.x + dx[i];
            next.y = next.y + dy[i];
            
            if(next.y < 1 || next.x < 1 || next.x > M || next.y > N)
            {
                continue;
            }
            
            if(gMap[next.y][next.x] == 0)
            {
                continue;
            }
            
            if(gDistance[next.y][next.x] != 0)
            {
                continue;
            }
            
            gDistance[next.y][next.x] = gDistance[current.y][current.x] + 1;
            q.push(next);
        }
    }

    std::cout << gDistance[N][M] + 1 << '\n';
    
    return 0;
}