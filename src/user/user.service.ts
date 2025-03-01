import { Injectable } from '@nestjs/common';
import { User } from './Interfaces/user,interface';
import * as path from 'path';
import { readingFromFile, writingToFile } from 'src/file/fileHandling.helper';

@Injectable()
export class UserService {
  private readonly filePath = path.join(
    path.dirname(path.dirname(__dirname)),
    'database',
    'users.json',
  );

  async getAllUsers(): Promise<Record<string, any>> {
    return await readingFromFile(this.filePath);
  }

  async CreateUser(users: Record<string, any>): Promise<void> {
    await writingToFile(users, this.filePath);
  }

  async getOneUser(email: string): Promise<User | undefined> {
    const users = await this.getAllUsers();
    return Object.values(users).find((user: User) => user.email === email);
  }
}
