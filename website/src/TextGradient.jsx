/* eslint-disable */

import { useState, useEffect } from 'react';

export function TextGradient({ text, ...other }) {
  const [isWebkit, isWebkitSet] = useState(null);

  useEffect(() => {
    const isWebkit = 'WebkitTextFillColor' in document.documentElement.style;
    isWebkitSet(isWebkit);
  }, []);

  if (isWebkit === true) {
    return <TextGradientWebkit text={text} {...other} />;
  } else if (isWebkit === false) {
    return <TextGradientNonWebkit text={text} {...other} />;
  } else {
    return <span style={{ color: other.fromColor }}>{text}</span>;
  }
}

export function TextGradientWebkit({
  text,
  fromColor,
  toColor,
  fallbackColor,
  direction,
  style,
  ...other
}) {
  const gradientStyle = {
    display: 'inline-block',
    color: fallbackColor || toColor,
    background: `-webkit-linear-gradient(${direction},${toColor},${fromColor})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    ...style,
  };

  return (
    <span key={`${fromColor}-${toColor}`} style={gradientStyle} {...other}>
      {text}
    </span>
  );
}

export function TextGradientNonWebkit({
  text,
  fromColor,
  toColor,
  fallbackColor,
  direction,
  style,
  ...other
}) {
  const gradientStyle = {
    position: 'relative',
    display: 'inline-block',
    color: fallbackColor || toColor,
    width: '100%',
    ...style,
  };

  const overStyle = {
    display: 'block',
    mask: `url(#svgGrad-${direction})`,
    color: fromColor,
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    zIndex: 1,
    textAlign: 'inherit',
  };

  const svgGradDirectionsProps = {
    right: { x1: '0', x2: '1' },
    left: { x1: '1', x2: '0' },
    bottom: { y1: '0', y2: '1' },
    top: { y1: '1', y2: '0' },
  };

  const SvgGrad = (
    <svg height="0" width="0" style={{ position: `absolute` }}>
      <mask
        id={`svgGrad-${direction}`}
        maskUnits="objectBoundingBox"
        maskContentUnits="objectBoundingBox"
      >
        <linearGradient
          id="g"
          gradientUnits="objectBoundingBox"
          {...svgGradDirectionsProps[direction]}
        >
          <stop stopColor="white" offset="0" />
          <stop stopColor="white" stopOpacity="0" offset="1" />
        </linearGradient>
        <rect x="0" y="0" width="1" height="1" fill="url(#g)" />
      </mask>
    </svg>
  );

  return (
    <span {...other} style={gradientStyle}>
      {SvgGrad}
      <span style={overStyle}>{text}</span>
      {text}
    </span>
  );
}
