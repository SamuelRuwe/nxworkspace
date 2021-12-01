PROJ=eight-queens

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-Os --bind -o eight-queens.js -s MODULARIZE=1 -s EXPORT_NAME="EightQueensModule"

$(PROJ): $(PROJ).cpp
	$(CC) -o $@ $^ $(CFLAGS)

.PHONY: clean
clean:
	$(RM) $(PROJ)
