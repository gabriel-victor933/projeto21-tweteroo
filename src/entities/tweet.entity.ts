import { User } from "./user.entity";

export class Tweet {
    private _user: User;
    private _tweet: string;

    constructor(user: User, tweet: string){
        this._user = user;
        this._tweet = tweet;
    }

    get tweet(){
        return {...this._user, tweet: this._tweet}
    }
}