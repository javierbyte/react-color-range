import { createElement } from 'react';
import { hslToHex, hexToHsl, parseHsl } from './lib/color-utils.js';

const props = {
  h: {
    max: 359,
  },
  s: {
    bg: (h, s) =>
      `linear-gradient(90deg, hsl(${h}, 0%, 50%), hsl(${h}, 100%, 50%)`,
    max: 100,
  },
  l: {
    bg: (h, s) =>
      `linear-gradient(90deg, hsl(${h}, ${s}%, 0%), hsl(${h}, ${s}%, 50%), hsl(${h}, ${s}%, 100%)`,
    max: 100,
  },
};

function Selector({ value = '', type, onChange, style, ...other }) {
  const { h, s, l } = value.includes(`#`) ? hexToHsl(value) : parseHsl(value);
  let hsl = { h, s, l };

  let elStyle = { ...style };
  if (props[type].bg) {
    elStyle.background = props[type].bg(h, s);
  }

  return createElement('input', {
    value: other[type] || hsl[type],
    onChange: (e) => {
      if (!onChange) return;

      hsl[type] = parseInt(e.target.value, 10);

      onChange({
        hex: hslToHex(hsl.h, hsl.s, hsl.l),
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
        ...hsl,
      });
    },
    type: 'range',
    className: `jb-color-picker -${type}`,
    max: props[type].max,
    style: elStyle,
    ...other,
  });
}

export function HueSelector(props) {
  return createElement(Selector, { type: 'h', ...props });
}

export function SaturationSelector(props) {
  return createElement(Selector, { type: 's', ...props });
}

export function LuminositySelector(props) {
  return createElement(Selector, { type: 'l', ...props });
}
