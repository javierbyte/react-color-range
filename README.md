# react-color-range &middot; [![](https://badgen.net/bundlephobia/minzip/react-color-range@latest)](https://bundlephobia.com/package/react-color-range)

Super tiny color input ranges for react. `react-color-range` leverages the
native `input type="range"` and CSS linear gradients to reduce the bundle size.

## Usage

```jsx
import { HueSelector } from 'react-color-range';
import 'react-color-range/style.css';

[...]

// with hex colors
<HueSelector
  value={colorHex}
  onChange={color => {
    changeColorHook(color.hex);
  }}
/>

<SaturationSelector
  value={colorHex}
  onChange={color => {
    changeColorHook(color.hex);
  }}
/>

<LuminositySelector
  value={colorHex}
  onChange={color => {
    changeColorHook(color.hex);
  }}
/>
```

Each of the three components accept the following props:

- `value`: Either a 6 character hex color (example: `#FFFFFF`) or hsl color
  expressed with degrees for hue and percentages for saturation and luminosity
  (example: `hsl(0, 100%, 50%)`). Please note that using hsl colors as the
  source is preferred to prevent color resolution lost on high and low
  luminosities.
- `onChange`: Function that will return an object when the color is changed.
  - On change response: And object with the following properties:
    - `hsl`: New hsl color
    - `hex`: New hex color
    - `h`, `s`, `l`: components of the hsl color
