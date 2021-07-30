PROJ=seven

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-O3 --no-entry -s EXPORTED_FUNCTIONS="['_$(PROJ)']"

$(PROJ).wasm: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).wasm
