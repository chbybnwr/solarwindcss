# fontSmoothing

<details>
<summary><code>antialiased</code></summary>

```ts
{
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}
```

</details>

<details>
<summary><code>subpixelAntialiased</code></summary>

```ts
{
  WebkitFontSmoothing: 'auto',
  MozOsxFontSmoothing: 'auto',
}
```

</details>

```tsx
import { antialiased } from 'solarwindcss'

function Example() {
  return (
    <div
      {...apply(
        antialiased,
        //
      )}
    >
      Lorem Ipsum
    </div>
  )
}
```
