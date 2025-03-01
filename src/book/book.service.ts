import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import * as path from 'path';
import {
  readingFromFile,
  writingToFile,
} from 'src/common/file/fileHandling.helper';
@Injectable()
export class BookService {
  private readonly filePath = path.join(
    path.dirname(path.dirname(__dirname)),
    'database',
    'books.json',
  );

  async addBook(
    bookId: number,
    bookTitle: string,
    description: string,
    bookYear: number,
  ) {
    try {
      const books = await readingFromFile(this.filePath);

      books[bookId] = { bookTitle, description, bookYear };

      await writingToFile(books, this.filePath);

      return {
        message: 'Book added successfully',
        data: books[bookId],
      };
    } catch (err) {
      throw new HttpException(
        `Error: ${err.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllBooks(): Promise<Record<string, any>> {
    const books = await readingFromFile(this.filePath);
    return books;
  }

  async getBookById(bookId: string): Promise<Record<string, any>> {
    try {
      const books = await readingFromFile(this.filePath);

      if (!books?.[bookId]) {
        throw new NotFoundException('Book not found');
      }

      return {
        message: 'Book found',
        data: books[bookId],
      };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }

      throw new InternalServerErrorException(
        err.message || 'Internal Server Error',
      );
    }
  }

  async removeBook(bookId: string) {
    try {
      const books = await readingFromFile(this.filePath);

      if (!books?.[bookId]) {
        throw new NotFoundException('Book not found');
      }

      const deletedBook = books[bookId];
      delete books[bookId];
      await writingToFile(books, this.filePath);

      return { message: 'Book removed successfully', data: deletedBook };
    } catch (err) {
      if (err instanceof HttpException) {
        throw err;
      }

      throw new InternalServerErrorException(
        err.message || 'Internal Server Error',
      );
    }
  }
}
