# Color Scheme

```markdown
| Token               | Value                                |
| ------------------- | ------------------------------------ |
| atColorScheme.light | @media (prefers-color-scheme: light) |
| atColorScheme.dark  | @media (prefers-color-scheme: dark)  |
```

```tsx
import { atColorScheme } from 'solarwindcss/at-color-scheme.stylex'

function Example() {
  return (
    <div
      {...apply({
        color: {
          default: 'black',
          [atColorScheme.dark]: 'white',
        },
      })}
    >
      lorem ipsum
    </div>
  )
}
```
