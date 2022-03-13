import { CreateDonateDto, DonateDto } from "../dto";
import { DonateEntity } from "../entity";
import { DonateRepository } from "../repository";
import { DonateServiceInterface } from "../types";

export class DonateService implements DonateServiceInterface {
  constructor(private readonly donateRepository = new DonateRepository()) {}

  async getAll(): Promise<DonateDto[]> {
    return await this.donateRepository.getAll();
  }

  async createDonate({ amount, currency }: CreateDonateDto): Promise<DonateDto> {
    const { donate } = new DonateEntity(amount, currency);

    return await this.donateRepository.create(donate);
  }
}
