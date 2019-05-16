export type Method =
  | 'get'
  | 'GET'
  | 'Get'
  | 'post'
  | 'POST'
  | 'Post'
  | 'put'
  | 'PUT'
  | 'Put'
  | 'delete'
  | 'DELETE'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'Head'
  | 'option'
  | 'OPTION'
  | 'Option'
  | 'patch'
  | 'PATCH'
  | 'Patch';

export interface IRequestConfig {
  url: string;
  method?: Method;

  // TODO: data and params should be an union type
  data?: any;
  params?: any;
}
