PROJ=console-log-wasm

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-Os -o console-logger.js -s MODULARIZE=1 -s EXPORT_NAME="ConsoleLoggerModule"

$(PROJ): $(PROJ).c
	$(CC) -o $@ $^ $(CFLAGS)

.PHONY: clean
clean:
	$(RM) $(PROJ)
