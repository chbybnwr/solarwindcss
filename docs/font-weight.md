# fontWeight

```markdown
| Token                 | Value |
| --------------------- | ----- |
| fontWeight.thin       | 100   |
| fontWeight.extralight | 200   |
| fontWeight.light      | 300   |
| fontWeight.normal     | 400   |
| fontWeight.medium     | 500   |
| fontWeight.semibold   | 600   |
| fontWeight.bold       | 700   |
| fontWeight.extrabold  | 800   |
| fontWeight.black      | 900   |
```

```tsx
import { fontWeight } from 'solarwindcss/font-weight.stylex'

function Example() {
  return (
    <h1
      {...apply({
        fontWeight: fontWeight.light,
      })}
    >
      Lorem Ipsum
    </h1>
  )
}
```
