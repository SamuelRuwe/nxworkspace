#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

const int array_size = 8;

void func(int i) {
    cout << ' ' << i << endl;
}


struct point {
    int x = 0;
    int y = 0;
};

void point_func(point a) {
    cout << ' ' << a.x << endl;
}

int main() {
    vector<int> v;
    v.push_back(1);
    v.push_back(2);
    for_each(v.begin(), v.end(), func);
    vector <point> v2;
    v2.push_back({.x =  1, .y = 2});
    for_each(v2.begin(), v2.end(), point_func);
    return 0;
}
