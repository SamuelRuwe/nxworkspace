import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WebpAPI } from './libwebp.model';

@Component({
  selector: 'nx-workspace-libwebp',
  templateUrl: './libwebp.component.html',
  styleUrls: ['./libwebp.component.css']
})
export class LibwebpComponent implements OnInit {

  @ViewChild('canvasElement') canvasElement!: ElementRef;
  uploadedFile: File | null = null;
  img!: ImageBitmap;
  api = new WebpAPI();

  loaded = false;
  buffer!: Uint8Array;
  instance: any;
  imgURL: any;
  blob: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadWasm();
  }

  private async loadWasm() {

    const importObj = {
      env: {
        memory: new WebAssembly.Memory({initial: 1024}),
        emscripten_notify_memory_growth: () => console.log('Increasing Memory')
      },
      wasi_snapshot_preview1: {
        fd_write: (data: string) => console.log(data),
        fd_seek: () => console.log('Seeking'),
        fd_close: () => console.log('Closing'),
        proc_exit: () => console.log('Exiting')
      }
    }

    const response = await fetch('sam-wasm/webp/webp.wasm');
    const {instance, module} = await WebAssembly.instantiateStreaming(response, importObj);
    console.log(instance);
    console.log(module);
    this.instance = instance;
    this.api.version = instance.exports.version;
    this.api.create_buffer = instance.exports.create_buffer;
    this.api.destroy_buffer = instance.exports.destroy_buffer;
    this.api.encode = instance.exports.encode;
    this.api.free_result = instance.exports.free_result;
    this.api.get_result_pointer = instance.exports.get_result_pointer;
    this.api.get_result_size = instance.exports.get_result_size;
    console.log('Wasm Loaded');
    this.loaded = true;
    // @ts-ignore
    this.buffer = new Uint8Array(instance.exports.memory.buffer);
  }

  async handleFileInput(evt: Event) {
    const files: FileList = (evt.target as HTMLInputElement).files as FileList;
    this.uploadedFile = files.item(0);
    if (!this.uploadedFile) return;
    this.blob = await this.uploadedFile.arrayBuffer();
    this.displayImage(this.uploadedFile);
  }

  private async displayImage(imgBlob: Blob) {
    const ctx = this.canvasElement.nativeElement.getContext('2d');
    const canvas = this.canvasElement.nativeElement;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.img = await createImageBitmap(imgBlob);
    canvas.width = this.img.width;
    canvas.height = this.img.height;
    ctx.drawImage(this.img, 0, 0);
  }

  convertToWebP() {
    if (!this.uploadedFile) return;
    const {api, img} = this;
    const ctx = this.canvasElement.nativeElement.getContext('2d');
    const image = ctx.getImageData(0, 0, img.width, img.height);

    const p = api.create_buffer(image.width, image.height);
    this.buffer = new Uint8Array(this.instance.exports.memory.buffer);
    this.buffer.set(image.data, p);
    api.encode(p, image.width, img.height, 100);
    const resultPointer = api.get_result_pointer();
    const resultSize = api.get_result_size();
    const resultView = new Uint8Array(this.instance.exports.memory.buffer, resultPointer, resultSize);
    const result = new Uint8Array(resultView);
    api.free_result(resultPointer);
    api.destroy_buffer(p);
    const blob = new Blob([result], {type: 'image/webp'});

    this.imgURL = this.sanitizeImg(blob);
    this.displayImage(blob);
  }

  sanitizeImg(blob: Blob) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
  }

}
