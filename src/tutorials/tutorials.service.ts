import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { Model } from 'mongoose';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class TutorialsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const newPost = await new this.postModel(createPostDTO);
        return newPost.save();
    }

    async getPost(postID): Promise<Post> {
        const post = await this.postModel.findById(postID).exec();
        return post;
    }

    async getPosts(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }

    async editPost(postID: string, createPostDTO: CreatePostDTO): Promise<Post> {
        const post = await this.postModel.findByIdAndUpdate(postID, createPostDTO, { new: true }).exec();
        return post;
    }

    async deletePost(postId: string): Promise<Post> {
        const post = await this.postModel.findByIdAndDelete(postId);
        return post;
    }

}
