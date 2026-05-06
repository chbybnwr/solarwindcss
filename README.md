# SolarWind CSS ☉≈ [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chbybnwr/solarwindcss/blob/prototype/LICENSE) [![npm version](https://img.shields.io/npm/v/solarwindcss.svg?style=flat)](https://www.npmjs.com/package/solarwindcss)

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
      {...apply(
        font.mono,
        {
          color: color.green500,
          backgroundColor: 'black',
        },
        //
      )}
    >
      hello, world
    </div>
  )
}
```

## API

- [Responsive Design](docs/responsive-design.md)
- [Colors](docs/colors.md)
- [Spacing](docs/spacing.md)

### Layout

- [aspectRatio](docs/aspect-ratio.md)
- [display](docs/display.md)

### Sizing

- [width](docs/width.md)

### Typography

- [fontFamily](docs/font-family.md)
- [fontSize](docs/font-size.md)
- [fontSmoothing](docs/font-smoothing.md)
- [fontWeight](docs/font-weight.md)
- [letterSpacing](docs/letter-spacing.md)
- [lineClamp](docs/line-clamp.md)
- [lineHeight](docs/line-height.md)
- [textOverflow](docs/text-overflow.md)

### Borders

- [borderRadius](docs/border-radius.md)
- [outline](docs/outline.md)

### Effects & Filters

- [boxShadow](docs/box-shadow.md)
- [textShadow](docs/text-shadow.md)
- [filter](docs/filter.md)

### Transforms

- [perspective](docs/perspective.md)

### Transitions & Animation

- [transition](docs/transition.md)
- [animation](docs/animation.md)
