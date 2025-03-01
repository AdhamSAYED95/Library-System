import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { Role, Roles } from 'src/decorators/roles.decorator';
import { BookService } from './book.service';
import { BookUpDto } from './Dto/bookDto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Roles(Role.Librarian)
  @Post('add')
  addBook(@Body() bookUpDto: BookUpDto) {
    return this.bookService.addBook(
      bookUpDto.bookId,
      bookUpDto.bookTitle,
      bookUpDto.description,
      bookUpDto.bookYear,
    );
  }
  @Public()
  @Get('viewAllBooks')
  readAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get('chooseBook/:bookId')
  readBook(@Param('bookId') bookId: string) {
    return this.bookService.getBookById(bookId);
  }

  @Roles(Role.Librarian)
  @Delete('RemoveBook/:bookId')
  RemoveBook(@Param('bookId') bookId: string) {
    return this.bookService.removeBook(bookId);
  }
}
