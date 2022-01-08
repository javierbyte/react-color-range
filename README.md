# react-color-range

# [react-color-range](https://javier.xyz/react-color-range/) &middot; [![](https://badgen.net/bundlephobia/minzip/react)](https://bundlephobia.com/package/react-color-range@0.1.0)

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
