import { CreateDonateDto, DonateDto } from "../dto";

export interface DonateServiceInterface {
  getAll(): Promise<DonateDto[]>;
  createDonate({ amount, currency }: CreateDonateDto): Promise<DonateDto | null>;
}
