/* eslint-disable */

import { useState } from 'react';
import {
  HueSelector,
  SaturationSelector,
  LuminositySelector,
} from 'react-color-range';
import 'react-color-range/style.css';

import { TextGradient } from './TextGradient.jsx';

import {
  JBX,
  MainHeader,
  Text,
  Space,
  Container,
  Box,
  A,
  CodeSnippet,
  Inline,
  Stack,
} from 'jbx';

const exampleCode = `
import { HueSelector } from 'react-color-range';
import 'react-color-range/style.css';

// Value accepts hex and hsl colors
<HueSelector
  value={colorHex} // hex color or hsl value (with percentages)
  onChange={color => {
    changeColorHook(color.hex); // or \`color.hsl\`
  }}
/>

// \`SaturationSelector\` and \`LuminositySelector\` use the same props.
`.trim();

function App() {
  const [color, colorSet] = useState(`hsl(184, 59%, 49%)`);
  const [colorB, colorBSet] = useState(`hsl(37, 89%, 54%)`);

  return (
    <Container>
      <JBX accent={'#bdc3c7'} />
      <MainHeader>react color range</MainHeader>
      <Space h={1} />
      <Text>
        Tiny color selector components for React. Made using native input ranges
        and CSS gradients.
        <a
          href="https://bundlephobia.com/package/react-color-range@latest"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            height: 32,
            width: 140,
            background: `url(https://badgen.net/bundlephobia/minzip/react-color-range) no-repeat center`,
          }}
        />
      </Text>
      <Space h={1} />
      <div
        style={{
          textAlign: 'center',
          fontSize: `calc(10vmin + 4px)`,
          fontWeight: 900,
          letterSpacing: `-0.1vmin`,
          lineHeight: 0.9,
        }}
      >
        <TextGradient
          text={`Berlin, México, Guadalajara, Los Mochis, 東京, 大阪市, 서울`}
          fromColor={color}
          toColor={colorB}
          direction="right"
          style={{ padding: `32px 0` }}
        />
      </div>
      <Space h={1} />
      <Inline gap={2}>
        <Box
          style={{
            flex: 1,
            minWidth: 320,
            border: `1px solid #bdc3c7`,
            borderRadius: 32,
          }}
          padding={2}
        >
          <Stack gap={1.5}>
            <Stack gap={0.5}>
              <Text>Hue</Text>
              <HueSelector
                value={color}
                onChange={(color) => {
                  colorSet(color.hsl);
                }}
              />
            </Stack>
            <Stack gap={0.5}>
              <Text>Saturation</Text>
              <SaturationSelector
                value={color}
                onChange={(color) => {
                  colorSet(color.hsl);
                }}
              />
            </Stack>
            <Stack gap={0.5}>
              <Text>Luminosity</Text>
              <LuminositySelector
                value={color}
                onChange={(color) => {
                  colorSet(color.hsl);
                }}
              />
            </Stack>
          </Stack>
        </Box>

        <Box
          style={{
            flex: 1,
            minWidth: 320,
            border: `1px solid #bdc3c7`,
            borderRadius: 32,
          }}
          padding={2}
        >
          <Stack gap={1.5}>
            <Stack gap={0.5}>
              <Text>Hue</Text>
              <HueSelector
                value={colorB}
                onChange={(color) => {
                  colorBSet(color.hsl);
                }}
              />
            </Stack>
            <Stack gap={0.5}>
              <Text>Saturation</Text>
              <SaturationSelector
                value={colorB}
                onChange={(color) => {
                  colorBSet(color.hsl);
                }}
              />
            </Stack>
            <Stack gap={0.5}>
              <Text>Luminosity</Text>
              <LuminositySelector
                value={colorB}
                onChange={(color) => {
                  colorBSet(color.hsl);
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Inline>
      <Space h={4} />
      <Text>How to use:</Text>
      <Space h={1} />
      <CodeSnippet>{`npm i react-color-range`}</CodeSnippet>
      <Space h={1} />
      <CodeSnippet>{exampleCode}</CodeSnippet>
      <Space h={2} />
      <Text>
        For more information see the{' '}
        <A href="https://github.com/javierbyte/react-color-range/">
          github repo
        </A>
        .
      </Text>
      <Space h={2} />
      <Text>
        Made by <A href="https://javier.xyz">javierbyte</A>.
      </Text>
    </Container>
  );
}

export default App;
