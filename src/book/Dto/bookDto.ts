import { IsNumber, IsString } from 'class-validator';

export class BookUpDto {
  @IsNumber()
  bookId: number;

  @IsString()
  bookTitle: string;

  @IsString()
  description: string;

  @IsNumber()
  bookYear: number;
}
