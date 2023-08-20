import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {

  private users: User[]
  private tweets: Tweet[]

  constructor(){
    this.users = [];
    this.tweets = [];
  }

  getHello(): string {
    return 'Hello World!';
  }

  postUser(username: string, avatar: string){
    const user = new User(username,avatar)
    this.users.push(user);
    console.log(this.users)
  }

  createTweet(username: string, tweet: string){
    const user = this.users.find((user) => user.username == username)
    if(!user){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const newTweet = new Tweet(user,tweet)
    this.tweets.push(newTweet)
    console.log(this.tweets)
    return "ok"
  }

  getTweets(page: number){
    console.log(page)
    const sendTweets = this.tweets
    return sendTweets.reverse().slice(15*(page -1),15*page);
  }
}
