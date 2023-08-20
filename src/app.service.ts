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

  postUser(username: string, avatar: string){
    const user = new User(username,avatar)
    this.users.push(user);
  }

  createTweet(username: string, tweet: string){
    const user = this.users.find((user) => user.username == username)
    if(!user){
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    const newTweet = new Tweet(user,tweet)
    this.tweets.push(newTweet)
    return "ok"
  }

  getTweets(page: number){
    const sendTweets = this.tweets
    sendTweets.reverse()
    return sendTweets.slice(15*(page-1),15*page).map((tweet) => tweet.tweet)
  }

  getTweetsByUsername(username: string){
    const userTweets = this.tweets.map((tweet) => tweet.tweet).filter((tweet) => tweet.username === username)
    return userTweets
  }
}
