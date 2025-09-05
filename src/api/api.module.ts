import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ImageModule } from "./image/image.module";
import { UserModule } from "./user/user.module";
import { SeekerModule } from './seeker/seeker.module';

@Module({
  imports: [AuthModule, ImageModule, UserModule, SeekerModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
