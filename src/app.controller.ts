import { Controller, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { IStorage } from './formate';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('format')
  format(@Request() req): IStorage {
    console.log('@@@@', req.body);
    return this.appService.format(req.body);
  }
}
