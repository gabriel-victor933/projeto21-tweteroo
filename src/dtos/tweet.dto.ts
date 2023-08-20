import { IsString, IsNotEmpty, IsFQDN, IsDataURI, IsUrl } from "class-validator";
import { User } from "src/entities/user.entity";

export class CreateTweetDTO {
    @IsString()
    @IsNotEmpty({message: "All fields are required!"})
    username: string;
    @IsUrl()
    @IsNotEmpty({message: "All fields are required!"})
    tweet: string;
}