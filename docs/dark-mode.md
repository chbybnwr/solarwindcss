# Dark Mode

```markdown
| Token  | Value                               |
| ------ | ----------------------------------- |
| atDark | @media (prefers-color-scheme: dark) |
```

```tsx
import { atMedia } from 'solarwindcss/at-dark.stylex'

function Example() {
  return (
    <div
      {...apply({
        color: {
          default: 'black',
          [atDark]: 'white',
        },
      })}
    >
      lorem ipsum
    </div>
  )
}
```
