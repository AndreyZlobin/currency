import { CreateDonate, Currency } from '@core/api';
import { Preset } from '@components/PresetsList/types';

export interface DonateFormProps {
  onSubmit: (data: CreateDonate) => void;
  currencies: Currency[];
  presets: Preset[];
}
