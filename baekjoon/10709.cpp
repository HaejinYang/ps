/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <string>
#include <cstring>

constexpr int MAX_ROW = 100;
constexpr int MAX_COL = 100;

bool gCloudMap[MAX_ROW][MAX_COL];
int gCloudExpectaionMap[MAX_ROW][MAX_COL];

int findLeastNearCloud(int row, int col)
{
    for(int i = col; i >= 0; i--)
    {
        if(gCloudMap[row][i])
        {
            return i;
        }
    }
}

int main()
{
    std::memset(gCloudMap, 0, sizeof gCloudMap);
    std::memset(gCloudExpectaionMap, 0, sizeof gCloudExpectaionMap);
    
    /**
     * 1. 행을 위에서 아래로 스캔한다.
     * 2. 각 행의 첫 번째 구름을 i라고 할 때, 0~i-1은 구름이 올 수 없다.
     * 3. i부터 W까지, 구름이 있는 셀은 0분후에 구름이 온것
     * 4. i부터 W까지, 구름이 없는 곳은 왼쪽을 기준으로 가장 구름이 가까운 곳과 현재 셀의 위치 차이가 된다.
     */
     
    int H, W; // H는 행, W는 열
    std::cin >> H >> W;
    
    // 구름 지도 초기화
    for(int i = 0; i < H; i++)
    {
        std::string row;
        std::cin >> row;

        for(int j = 0; j < W; j++)
        {
            if(row[j] == 'c')
            {
                gCloudMap[i][j] = true;    
            }
            else
            {
                gCloudMap[i][j] = false;
            }
        }
    }
    
    // 1번 진행
    for(int i = 0; i < H; i++)
    {
        bool isFirstCloud = false;
        for(int j = 0; j < W; j++)
        {
            // 2번 진행
            bool hasCloud = gCloudMap[i][j];
            if(hasCloud)
            {
                isFirstCloud = true;
                
                // 3번 진행
                gCloudExpectaionMap[i][j] = 0;
            }
            else
            {
                if(isFirstCloud)
                {
                    // 4번 진행
                    int cloudPos = findLeastNearCloud(i, j);
                    gCloudExpectaionMap[i][j] = j - cloudPos;
                }
            }
            
            if(!isFirstCloud)
            {
                gCloudExpectaionMap[i][j] = -1;
            }
        }
    }
    
    for(int i = 0; i < H; i++)
    {
        for(int j = 0; j < W; j++)
        {
            std::cout << gCloudExpectaionMap[i][j] << ' ';
        }
        std::cout << '\n';
    }
    
    return 0;
}