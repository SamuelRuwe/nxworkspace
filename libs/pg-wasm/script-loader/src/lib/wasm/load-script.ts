export function loadScript(id: string, url: string): Promise<void> {
  let script = <HTMLScriptElement>document.getElementById(id);
  if (script) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    script = document.createElement('script');
    document.body.appendChild(script);

    script.onload = () => resolve();
    script.onerror = (ev: Event | string) => reject(ev);
    script.id = id;
    script.async = true;
    script.src = url;
  });
}

export function utf8ToString(heap: Uint8Array, offset: number) {
  let s = '';
  for (let i = offset; heap[i]; i++) {
    s += String.fromCharCode(heap[i]);
  }
  return s;
}
