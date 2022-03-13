import { PresetProps } from '@components/Preset/types';
import { Chip } from '@mui/material';
import React, { VFC } from 'react';
import { beautifyAmount, numberToLocaleNumber } from '@utils';

export const Preset: VFC<PresetProps> = ({
  preset,
  currenAmount,
  onSelectPreset,
  rate,
}) => {
  const computedPreset = preset * rate;

  const normalized = beautifyAmount(computedPreset);

  const handlerSelectPreset = () => onSelectPreset(normalized);

  const isActivePreset = normalized === currenAmount;

  const locateNumber = numberToLocaleNumber(normalized);

  return (
    <Chip
      label={locateNumber}
      variant={isActivePreset ? 'outlined' : 'filled'}
      color="primary"
      onClick={handlerSelectPreset}
    />
  );
};
