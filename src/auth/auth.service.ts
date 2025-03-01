import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    username: string,
    password: string,
    email: string,
    borrowedBooks: number,
  ) {
    const userId = uuidv4();

    const role = 'student';
    try {
      const users = await this.userService.getAllUsers();
      users[userId] = { username, password, email, borrowedBooks, role };
      await this.userService.CreateUser(users);
      return {
        message: 'User registered successfully',
        data: users[userId],
      };
    } catch (err) {
      throw new HttpException(
        `Error: ${err.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async logIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.getOneUser(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    const payload = {
      sub: user.userId,
      email: user.email,
      username: user.username,
      role: user.role,
      borrowedBooks: user.borrowedBooks,
    };
    return {
      ...result,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
