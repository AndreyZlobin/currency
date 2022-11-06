export class RegisterUserDto {
  email!: string;
  password!: string;
  username!: string;
  phone!: string;

  firstName!: string;
  lastName!: string;

  dateBirth?: string;
  address?: string;
}
