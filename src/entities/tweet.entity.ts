import { User } from "./user.entity";

export class Tweet {
    private _user: User;
    private tweet: string;

    constructor(user: User, tweet: string){
        this._user = user;
        this.tweet = tweet;
    }

}