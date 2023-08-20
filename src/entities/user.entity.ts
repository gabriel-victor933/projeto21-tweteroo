export class User {
    private _username: string;
    private email: string;

    constructor(username: string, email: string){
        this._username = username
        this.email = email
    }

    get username(){
        return this._username
    }
}

