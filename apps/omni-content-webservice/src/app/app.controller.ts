import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";

@Controller("/api")
@ApiTags("API")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
