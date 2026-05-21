# filter

## drop-shadow

```markdown
| Token                     | Value                                                                   |
| ------------------------- | ----------------------------------------------------------------------- |
| filter['drop-shadow-xs']  | drop-shadow(0 1px 1px var(--sw-drop-shadow-color, rgb(0 0 0 / 0.05)))   |
| filter['drop-shadow-sm']  | drop-shadow(0 1px 2px var(--sw-drop-shadow-color, rgb(0 0 0 / 0.15)))   |
| filter['drop-shadow-md']  | drop-shadow(0 3px 3px var(--sw-drop-shadow-color, rgb(0 0 0 / 0.12)))   |
| filter['drop-shadow-lg']  | drop-shadow(0 4px 4px var(--sw-drop-shadow-color, rgb(0 0 0 / 0.15)))   |
| filter['drop-shadow-xl']  | drop-shadow(0 9px 7px var(--sw-drop-shadow-color, rgb(0 0 0 / 0.1)))    |
| filter['drop-shadow-2xl'] | drop-shadow(0 25px 25px var(--sw-drop-shadow-color, rgb(0 0 0 / 0.15))) |
```

```jsx
import { filter } from 'solarwindcss/filter.stylex'
import { theme } from 'solarwindcss/theme.stylex'

function Example() {
  return (
    <img
      src="https://029c86dd-64bb-499e-a41b-11d81550f19c.mdnplay.dev/shared-assets/images/examples/firefox-logo.svg"
      {...apply({
        filter: filter['drop-shadow-xl'],
        // custom color with theme
        [theme['--sw-drop-shadow-color']]: color.blue500,
      })}
    />
  )
}
```

## blur

```markdown
| Token              | Value      |
| ------------------ | ---------- |
| filter['blur-xs']  | blur(4px)  |
| filter['blur-sm']  | blur(8px)  |
| filter['blur-md']  | blur(12px) |
| filter['blur-lg']  | blur(16px) |
| filter['blur-xl']  | blur(24px) |
| filter['blur-2xl'] | blur(40px) |
| filter['blur-3xl'] | blur(64px) |
```

```jsx
import { filter } from 'solarwindcss/filter.stylex'
import { theme } from 'solarwindcss/theme.stylex'

function Example() {
  return (
    <img
      src="https://029c86dd-64bb-499e-a41b-11d81550f19c.mdnplay.dev/shared-assets/images/examples/firefox-logo.svg"
      {...apply({
        filter: filter['blur-xl'],
      })}
    />
  )
}
```
