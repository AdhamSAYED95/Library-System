import { IsNumber, IsString } from 'class-validator';

export class signUpDto {
  @IsNumber()
  userId: number;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsNumber()
  borrowedBooks: number;
}
