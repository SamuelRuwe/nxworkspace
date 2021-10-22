/**
 * This is a simple typings definition for Emscripten's Module object
 */
interface EmscriptenReadFileOptions {
  encoding?: "utf8" | "binary";
  flags?: string;
}

interface CcallOptions {
  async?: boolean;
}

interface EmscriptenModule {
  // eslint-disable-next-line @typescript-eslint/ban-types
  preRun?: Function[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  postRun?: Function[];
  canvas?: HTMLCanvasElement;  arguments?: string[];
  print?(what: string): void;
  printErr?(what: string): void;
  locateFile?(file: string): string;
  ccall?(funcName: string, returnType: string, argumentTypes: string[], arguments: any[], options?: CcallOptions): any;
  FS_createDataFile?(
    parent: string,
    name: string,
    data: string | Uint8Array,
    canRead?: boolean,
    canWrite?: boolean,
    canOwn?: boolean
  ): void;
  FS_createPreloadedFile?(parent: string, name: string, url: string, canRead?: boolean, canWrite?: boolean): void;
  FS_readFile?(url: string, options?: EmscriptenReadFileOptions): any;
  FS_unlink?(path: string): void;
}
