# SolarWind CSS ☉≈

Design tokens for Vicinage & StyleX.

## Install

```bash
npm install solarwindcss
```

## Usage

```tsx
import { apply } from 'vicinage'
import { font } from 'solarwindcss'
import { color } from 'solarwindcss/color.stylex'

function Example() {
  return (
    <div
      {...apply(font.mono, {
        color: color.green500,
        backgroundColor: 'black',
      })}
    >
      hello, world
    </div>
  )
}
```
