import { Injectable } from '@nestjs/common';
import {} from '../../src/index';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
