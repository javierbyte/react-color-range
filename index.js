import { createElement } from 'react';

import { hslToHex, hexToHsl } from './lib/color-utils.js';

export function HueSelector({ value, hue, onChange, ...other }) {
  return createElement('input', {
    value: hue || hexToHsl(value).h,
    onChange: (evt) => {
      if (!onChange) return;

      const { s, l } = hexToHsl(value);

      onChange({
        hex: hslToHex(evt.target.value, s, l),
        h: evt.target.value,
        s,
        l,
      });
    },
    type: 'range',
    className: 'jb-hue-picker',
    min: 0,
    max: 359,
    step: 1,
    ...other,
  });
}
