# aspectRatio

```markdown
| Token             | Value  |
| ----------------- | ------ |
| aspectRatio.video | 16 / 9 |
```

```tsx
import { aspectRatio } from 'solarwindcss/aspect-ratio.stylex'

function Example() {
  return (
    <div
      {...apply({
        width: '100%',
        aspectRatio: aspectRatio.video,
      })}
    >
      lorem ipsum
    </div>
  )
}
```
