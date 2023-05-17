import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('tutorials')
export class TutorialsController {

    constructor(private tutorialsService: TutorialsService) {}


    @Post('/tutorial')
    async addTutorial(@Res() res, @Body() createPostDTO: CreatePostDTO){
        console.log(createPostDTO);
        const newPost = await this.tutorialsService.addPost(createPostDTO);
        console.log(newPost);
        return res.status(HttpStatus.OK).json({
            message: 'Post has been submitted',
            post: newPost
        });
    }

    @Get('/tutorial/:postID')
    async getTutorial(@Res() res, @Param('postID', new ValidateObjectId()) postID) {
        const post = await this.tutorialsService.getPost(postID);
        if (!post){
            throw new NotFoundException('Post does not exist');
        }
        return res.status(HttpStatus.OK).json(post);
    }

    @Get('/posts/')
    async getTutorials(@Res() res){
        const posts = await this.tutorialsService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    @Put('/edit')
    async editTutorial(@Res() res, @Query() postID, @Body() createPostDTO: CreatePostDTO) {
        const post = await this.tutorialsService.editPost(postID, createPostDTO);
        if (!post){
            throw new NotFoundException('Post Does Not Exist!');
        }
        return res.status(HttpStatus.OK).json(post);
    }

    @Put('/delete')
    async deleteTutorial(@Res() res, @Query() postID) {
        const post = await this.tutorialsService.deletePost(postID);
        if (!post){
            throw new NotFoundException('Post Does Not Exist!');
        }
        return res.status(HttpStatus.OK).json(post);
    }

}
