export interface LibwebpModel {
  version: any;
  create_buffer: any;
  destroy_buffer: any;
  encode: any;
  free_result: any;
  get_result_pointer: any;
  get_result_size: any;
}


export class WebpAPI implements LibwebpModel {
  version: any = null;
  create_buffer: any = null;
  destroy_buffer: any = null;
  encode: any = null;
  free_result: any = null;
  get_result_pointer: any = null;
  get_result_size: any = null;
}
