PROJ=webp

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-O1 --no-entry -s ALLOW_MEMORY_GROWTH=1 -I libwebp libwebp/src/dec/*.c libwebp/src/dsp/*.c libwebp/src/demux/*.c libwebp/src/enc/*.c libwebp/src/mux/*.c libwebp/src/utils/*.c \
-s EXPORTED_FUNCTIONS="['_version', '_create_buffer', '_destroy_buffer', '_encode', '_free_result', '_get_result_pointer', '_get_result_size']" \
-s EXPORTED_RUNTIME_METHODS=print --pre-js prewebp.js

$(PROJ).js: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).wasm
