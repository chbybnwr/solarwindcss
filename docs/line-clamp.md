# lineClamp

<details>
<summary><code>lineClamp.base</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
  WebkitLineClamp: null
}
```

</details>

<details>
<summary><code>lineClamp[1]</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1
}
```

</details>

<details>
<summary><code>lineClamp[2]</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2
}
```

</details>

<details>
<summary><code>lineClamp[3]</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3
}
```

</details>

<details>
<summary><code>lineClamp[4]</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4
}
```

</details>

<details>
<summary><code>lineClamp[5]</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5
}
```

</details>

<details>
<summary><code>lineClamp[6]</code></summary>

```ts
{
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 6
}
```

</details>

<details>
<summary><code>lineClamp.none</code></summary>

```ts
{
  overflow: 'visible',
  display: 'block',
  WebkitBoxOrient: 'horizontal',
  WebkitLineClamp: 'unset',
}
```

</details>

```tsx
import { lineClamp } from 'solarwindcss'

function Example() {
  return (
    <h1
      {...apply(
        lineClamp[3],
        //
      )}
    >
      Lorem Ipsum
    </h1>
  )
}
```
