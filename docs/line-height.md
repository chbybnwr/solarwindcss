# lineHeight

```markdown
| Token              | Value |
| ------------------ | ----- |
| lineHeight.tight   | 1.25  |
| lineHeight.snug    | 1.375 |
| lineHeight.normal  | 1.5   |
| lineHeight.relaxed | 1.625 |
| lineHeight.loose   | 2     |
```

```tsx
import { lineHeight } from 'solarwindcss/line-height.stylex'

function Example() {
  return (
    <h1
      {...apply({
        lineHeight: lineHeight.snug,
      })}
    >
      Lorem Ipsum
    </h1>
  )
}
```
