import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { StoreSeekerDto } from './store-seeker.dto';

export class StoreSeekerResponse extends StoreSeekerDto {

  @ApiProperty({
    type: String,
    description: 'Unique id based from user id.'    
  })
  userId: string;
}
