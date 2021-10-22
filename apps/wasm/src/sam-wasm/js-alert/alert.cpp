#include <stdio.h>
#include "emscripten.h"

extern "C" {
int samFunc() {
//    printf("Hello World\n");
    return 2;
}
}

int main() {
    return 0;
}
