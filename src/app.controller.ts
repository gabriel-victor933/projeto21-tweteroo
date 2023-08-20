import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dtos/users.dto';
import { CreateTweetDTO } from './dtos/tweet.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("sign-in")
  @HttpCode(200)
  postUser(@Body() body: CreateUserDTO){
    return this.appService.postUser(body.username,body.avatar);
  }

  @Post("tweets")
  postTweet(@Body() body: CreateTweetDTO){
    return this.appService.createTweet(body.username,body.tweet)
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
