# display

<details>
<summary><code>screenReaderOnly</code></summary>

```ts
{
  display: 'none',
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clipPath: 'inset(50%)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
}
```

</details>

<details>
<summary><code>notScreenReaderOnly</code></summary>

```ts
{
  position: 'static',
  width: 'auto',
  height: 'auto',
  padding: 0,
  margin: 0,
  overflow: 'visible',
  clipPath: 'none',
  whiteSpace: 'normal',
}
```

</details>

```tsx
import { screenReaderOnly } from 'solarwindcss'

function Example() {
  return (
    <div
      {...apply(
        screenReaderOnly,
        //
      )}
    >
      hello, screen reader users
    </div>
  )
}
```
