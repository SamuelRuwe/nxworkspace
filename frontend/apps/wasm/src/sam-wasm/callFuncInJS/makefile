PROJ=call_func

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-O3 --no-entry -s EXPORTED_FUNCTIONS="['_$(PROJ)']" -s ERROR_ON_UNDEFINED_SYMBOLS=0

$(PROJ).wasm: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).wasm
