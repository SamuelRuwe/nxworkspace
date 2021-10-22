PROJ=matrix

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-O3 --no-entry -s EXPORTED_FUNCTIONS='["_scalarMult", "_vectorMult", "_matrixMult", "_getOffset"]'

$(PROJ).wasm: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).wasm
