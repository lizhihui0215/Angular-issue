export class Pager<T> {
  total: number;
  pageIndex: number;
  pageSize: number;
  result: T;

  constructor(total: number, pageIndex: number, pageSize: number, result: T) {
    this.total = total;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.result = result;
  }
}

export class Response<T> {
  message: string;
  code: number;
  results: T;

  constructor(message: string, code: number, results: T) {
    this.message = message;
    this.code = code;
    this.results = results;
  }
}
