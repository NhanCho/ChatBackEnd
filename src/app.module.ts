import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';
import { UserService } from './service/user/user.service';
import { UserController } from './controller/v1/user/user.controller';
import { GatewaysModule } from './gateways/gateway.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://itsmetremor1123:NHAN2003@cluster0.to6sg2f.mongodb.net/shop'),
    UserModule,
    GatewaysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
