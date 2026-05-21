# perspective

```markdown
| Token                | Value  |
| -------------------- | ------ |
| perspective.dramatic | 100px  |
| perspective.near     | 300px  |
| perspective.normal   | 500px  |
| perspective.midrange | 800px  |
| perspective.distant  | 1200px |
```

```tsx
import { perspective } from 'solarwindcss/perspective.stylex'

function Example() {
  return (
    <div
      {...apply({
        perspective: perspective.dramatic,
      })}
    >
      3D box
    </div>
  )
}
```
