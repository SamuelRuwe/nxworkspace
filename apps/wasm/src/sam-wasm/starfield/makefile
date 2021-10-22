PROJ=starfield
WEBGL_VERSION=2

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=em++

CFLAGS=-std=c++17 -O0 -s ALLOW_MEMORY_GROWTH=1 -s MAX_WEBGL_VERSION=$(WEBGL_VERSION) -s MIN_WEBGL_VERSION=$(WEBGL_VERSION) \
-s USE_LIBPNG=1 -s MODULARIZE=1

$(PROJ).js: $(PROJ).cpp
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).wasm $(PROJ).js
