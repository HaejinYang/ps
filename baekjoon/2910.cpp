/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <vector>
#include <algorithm>
#include <map>
struct Element
{
    int val;
    int count;
    int order;
};

int main()
{
    // 빈도 정렬
    // 수열에서 등장 많이한 순서대로 정렬
    // 등장 빈도가 같으면 먼저 등장한 것이 앞에 있음.
    int N, C;
    std::cin >> N >> C;
    
    std::map<int, Element> m;
    int order = 1;
    for(int i = 0; i < N; i++)
    {
        int val;
        std::cin >> val;
    
        if(m.count(val) != 0)
        {
            m[val].count += 1;
        }
        else
        {
            m.insert({val, {val, 1, order}});
            ++order;
        }
    }
    
    auto compare = [](const Element& lhs, const Element& rhs) {
        if(lhs.count > rhs.count) {
            return true;
        }
        else if(lhs.count < rhs.count) {
            return false;
        }
        else
        {
            return lhs.order < rhs.order;
        }
    };
    
    std::vector<Element> v;
    v.reserve(N);
    for(auto e: m)
    {
        v.push_back({e.second.val, e.second.count, e.second.order});
        //std::cout << e.second.val << ' ' << e.second.count << ' ' << e.second.order << '\n';
    }
    
    std::sort(v.begin(), v.end(), compare);
    
    for(auto e: v)
    {
        for(int i = 0; i < e.count; i++)
        {
            std::cout << e.val << ' ';
        }
    }
    
    return 0;
}