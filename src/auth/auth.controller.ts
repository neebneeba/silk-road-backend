import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

// Services
import { AuthService } from './auth.service';

// Dtos
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.singIn(signInDto.username, signInDto.password);
  }
}
