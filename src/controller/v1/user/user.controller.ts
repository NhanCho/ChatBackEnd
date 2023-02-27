import { Body, Controller, Delete, Get, Param, Post , Query} from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Get()
    getAll(){
        return this.userService.getAll();
    }


    @Get(':id')
    getDetail(@Param('id') id:string){
        console.log(id);
        return this.userService.getDetail(id);
    }

    @Post('create')
    async getCreate(@Body() user:User){        
        return this.userService.create(user);
    }
    @Delete('delete')
    async deleteById(@Query('id') id:string){
        return this.userService.deleteById(id);
    }

    // @Put('update')
    // async updateById(@Query('id')  id:string){
    //     return this.userService.updateById(id);
    // }
}

