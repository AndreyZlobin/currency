import { Preset, PresetsListProps } from '@components/PresetsList/types';

export interface PresetProps extends Omit<PresetsListProps, 'presets'> {
  preset: Preset;
}
