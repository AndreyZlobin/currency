import React, { VFC } from 'react';
import { PresetsListProps } from '@components/PresetsList/types';
import { Preset } from '@components/Preset';
import { Stack } from '@mui/material';

export const PresetsList: VFC<PresetsListProps> = ({
  presets,
  onSelectPreset,
  currenAmount,
  rate,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      {presets.map((preset, index) => (
        <Preset
          key={index}
          currenAmount={currenAmount}
          preset={preset}
          rate={rate}
          onSelectPreset={onSelectPreset}
        />
      ))}
    </Stack>
  );
};
