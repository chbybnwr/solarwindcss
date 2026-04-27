# borderRadius

```markdown
| Token               | Value    |
| ------------------- | -------- |
| borderRadius.xs     | 0.125rem |
| borderRadius.sm     | 0.25rem  |
| borderRadius.md     | 0.375rem |
| borderRadius.lg     | 0.5rem   |
| borderRadius.xl     | 0.75rem  |
| borderRadius['2xl'] | 1rem     |
| borderRadius['3xl'] | 1.5rem   |
| borderRadius['4xl'] | 2rem     |
```

```tsx
import { borderRadius } from 'solarwindcss/border-radius.stylex'

function Example() {
  return (
    <h1
      {...apply({
        borderRadius: borderRadius.snug,
      })}
    >
      Lorem Ipsum
    </h1>
  )
}
```
