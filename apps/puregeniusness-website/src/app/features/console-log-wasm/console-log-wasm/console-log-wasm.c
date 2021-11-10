#include <stdio.h>
#include <emscripten.h>
#include <emscripten/html5.h>

#define ARR_SIZE(arr) ( sizeof(arr) / sizeof(arr[0]) )

char *str[4];

void init_greetings() {
  str[0] = "Logging to the page";
  str[1] = "Affirmative";
  str[2] = "OutOfMemoryException!!! Not really though'";
  str[3] = "Sam is the smartest!";
}

EM_BOOL mouse_callback(int eventType, const EmscriptenMouseEvent *e, void *userData)
{
  printf("%s. You clicked at (%ld, %ld)\n", str[(e->clientX + e->clientY) % ARR_SIZE(str)], e->clientX, e->clientY);
  return 0;
}

int main(int argc, char *argv[])
{
  init_greetings();

  printf("Hello World\n");

  emscripten_set_click_callback(EMSCRIPTEN_EVENT_TARGET_WINDOW, 0, 0, mouse_callback);
  return 0;
}
