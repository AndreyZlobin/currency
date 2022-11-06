import { RegisterUserDto, UserLoginDto } from "../dto";

export class AuthService {
  #checkIsUserExist(email: string) {
    return !email;
  }

  public async userLogin(loginDto: UserLoginDto) {
    return loginDto;
  }

  public async register(registerDto: RegisterUserDto) {
    if (this.#checkIsUserExist(registerDto.email)) {
      return false;
    }
    return registerDto;
  }
}
