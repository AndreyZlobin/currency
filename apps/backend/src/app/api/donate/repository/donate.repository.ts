import { CreateDonateDto, DonateDto } from "../dto";
import { donationModel } from "../model/doante.model";
import { DonateRepositoryInterface } from "../types";

export class DonateRepository implements DonateRepositoryInterface {
  constructor(private readonly DonationModel = donationModel) {}

  async getAll(): Promise<DonateDto[]> {
    return await this.DonationModel.find();
  }

  async create(donate: CreateDonateDto): Promise<DonateDto> {
    return await this.DonationModel.create(donate);
  }
}
