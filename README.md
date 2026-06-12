# SolarWind CSS ☉≈ &middot; [![npm version](https://img.shields.io/npm/v/solarwindcss.svg?style=flat-square)](https://www.npmjs.com/package/solarwindcss) [![build](https://img.shields.io/github/actions/workflow/status/chbybnwr/solarwindcss/publish.yml?label=build&style=flat-square)](https://github.com/chbybnwr/solarwindcss/actions/workflows/publish.yml) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/chbybnwr/solarwindcss/blob/main/LICENSE)

Design tokens for [Vicinage](https://github.com/chbybnwr/vicinage) & [StyleX](https://stylexjs.com).

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
- [Color Scheme](docs/color-scheme.md)
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
