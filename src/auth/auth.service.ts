import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// Services
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async singIn(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      profile_picture: user.profile_picture,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
