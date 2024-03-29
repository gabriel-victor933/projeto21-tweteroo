import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty({message: "All fields are required!"})
    username: string;
    @IsUrl()
    @IsNotEmpty({message: "All fields are required!"})
    avatar: string;
}