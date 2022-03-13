import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

import { CurrencyCodeEnum } from "../../currencies/types";

export class CreateDonateDto {
  @IsNotEmpty({ message: "amount - is required field" })
  @IsNumber({}, { message: "amount field - must be number" })
  @IsPositive({ message: "amount field - must be positive number" })
  @Min(1, { message: "Donation amount must be greater than 0" })
  amount!: number;

  @IsNotEmpty({ message: "currency - is required field" })
  @IsString({ message: "currency field - must be number" })
  currency!: CurrencyCodeEnum;
}
