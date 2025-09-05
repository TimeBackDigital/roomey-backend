import { Controller, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { StoreSeekerDto } from './dto/store-seeker.dto';
import { StoreSeekerResponse } from './dto/store-seeker-response';

@Controller('seeker')
export class SeekerController {

  @Post()
  @ApiCreatedResponse({
    type: StoreSeekerResponse,
    description: 'Seeker profile was created.',
  })
  async store(
    @Body() dto: StoreSeekerDto,
  ) {
  }
}
