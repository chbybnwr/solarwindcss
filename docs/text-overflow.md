# textOverflow

<details>
<summary><code>truncate</code></summary>

```ts
{
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}
```

</details>

```tsx
import { truncate } from 'solarwindcss'

function Example() {
  return (
    <div
      {...apply(
        truncate,
        //
      )}
    >
      Insert very long and uninterrupted text here.
    </div>
  )
}
```
