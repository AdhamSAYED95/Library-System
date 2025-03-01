import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './Dto/signInDto';

import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(@Body() signUpDto: signUpDto) {
    return this.authService.signUp(
      signUpDto.username,
      signUpDto.password,
      signUpDto.email,
      signUpDto.borrowedBooks,
    );
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() signInDto: signUpDto) {
    return this.authService.logIn(signInDto.email, signInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
