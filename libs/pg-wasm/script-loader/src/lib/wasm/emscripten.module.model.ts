export type EmscriptenModuleDecorator<M extends EmscriptenModule> = (module: M) => void;

export const noopModuleDecorator = (mod: EmscriptenModule) => mod;

export interface EmscriptenReadFileOptions {
  encoding?: 'utf8' | 'binary';
  flags?: string;
}

export interface CcallOptions {
  async?: boolean;
}

export interface EmscriptenModule {
  arguments?: string[];
  preRun?: (args: any[]) => void;
  postRun?: (args: any[]) => void;
  canvas?: HTMLCanvasElement;

  print?(arg: string): void;

  printErr?(arg: string): void;

  locateFile?(arg: string): string;

  ccall?(funcName: string, returnType: string, argumentTypes: string[], args: any[], options?: CcallOptions): any;

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
