PROJ=hello

ifeq ($(OS),WINDOWS_NT)
	RM=del
else
	RM=rm
endif

CC=emcc

CFLAGS=-O3 -s WASM=1

$(PROJ).html: $(PROJ).c
	$(CC) $(CFLAGS) -o $@  $^

.PHONY: clean
clean:
	$(RM) $(PROJ).html $(PROJ).js $(PROJ).wasm
