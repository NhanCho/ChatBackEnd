
import { User, UserDocument } from './../../schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async getAll(): Promise<User[]> {
        try{
            let users = await this.userModel.find().exec();
            return users;
        }catch(error){
            return null;
        }
    }
    
    //getDetail
    async getDetail(id: string): Promise<User[]> {
        try{
        return await this.userModel.find({user_id:id}).exec();
        }catch(error){
            return null;
        }
    }
    async create(user: User): Promise<User> {
        try{
            const createdUser = new this.userModel(user);
            return await createdUser.save();
        }catch(error){
            return null;
        }
    }
    async deleteById(_id:string): Promise<User>{
        try {
            return await this.userModel.findByIdAndDelete(_id);
            
        } catch(error){
            return null;
        }
    }

    async updateById(user: User, _id: string): Promise<User> {
        try{
            return await this.userModel.findByIdAndUpdate(_id, user);

        }catch(error){
            return null;
        }
    }
}
