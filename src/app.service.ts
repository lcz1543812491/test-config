import { Injectable } from '@nestjs/common';
import { formatStorageNumberToObj, IStorage } from './formate';

@Injectable()
export class AppService {
  format(params): IStorage {
    const res = formatStorageNumberToObj(params.number, params.decimal);
    return res;
  }
}
