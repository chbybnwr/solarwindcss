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
    <h1
      {...apply(
        antialiased,
        //
      )}
    >
      Lorem Ipsum
    </h1>
  )
}
```
