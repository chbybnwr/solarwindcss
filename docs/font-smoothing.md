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
  WebkitFontSmoothing: null,
  MozOsxFontSmoothing: null,
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
