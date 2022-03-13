export type Preset = number;

export interface PresetsListProps {
  presets: Preset[];
  currenAmount: number;
  rate: number;
  onSelectPreset: (preset: Preset) => void;
}
