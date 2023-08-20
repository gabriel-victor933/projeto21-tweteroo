import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dtos/users.dto';
import { CreateTweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("sign-in")
  postUser(@Body() body: CreateUserDTO){
    return "ok"
  }

  @Post("tweets")
  postTweet(@Body() body: CreateTweetDTO){
    return "post tweets"
  }

  @Get("tweets")
  getTweets(@Query("page") page: number){
    console.log(page);
    return "ok"
  }

  @Get("tweets/:username")
  getTweet(@Param("username") username: string){
    console.log(username);
    return "ok"
  }
}
