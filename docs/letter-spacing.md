# letterSpacing

```markdown
| Token                 | Value    |
| --------------------- | -------- |
| letterSpacing.tighter | -0.05em  |
| letterSpacing.tight   | -0.025em |
| letterSpacing.normal  | 0em      |
| letterSpacing.wide    | 0.025em  |
| letterSpacing.wider   | 0.05em   |
| letterSpacing.widest  | 0.1em    |
```

```tsx
import { letterSpacing } from 'solarwindcss/letter-spacing.stylex'

function Example() {
  return (
    <h1
      {...apply({
        letterSpacing: letterSpacing.tight,
      })}
    >
      Lorem Ipsum
    </h1>
  )
}
```
