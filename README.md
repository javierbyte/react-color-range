# react-color-range &middot; [![](https://badgen.net/bundlephobia/minzip/react-color-range)](https://bundlephobia.com/package/react-color-range@0.1.0)

Super tiny color input ranges for react. `react-color-range` leverages the
native `input type="range"` to reduce the bundle size.

## Usage

```
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

// with hue colors
<HueSelector
  value={hue}
  onChange={color => {
    changeHue(color.h);
  }}
/>
```
