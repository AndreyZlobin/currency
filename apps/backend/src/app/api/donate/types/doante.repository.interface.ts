import { CreateDonateDto, DonateDto } from "../dto";

export interface DonateRepositoryInterface {
  getAll(): Promise<DonateDto[]>;
  create(word: CreateDonateDto): Promise<DonateDto>;
}
