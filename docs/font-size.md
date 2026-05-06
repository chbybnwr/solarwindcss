# fontSize

<details>
<summary><code>textSize.xs</code></summary>

```ts
{
  fontSize: '0.75rem',
  lineHeight: 'calc(1 / 0.75)',
}
```

</details>

<details>
<summary><code>textSize.sm</code></summary>

```ts
{
  fontSize: '0.875rem',
  lineHeight: 'calc(1.25 / 0.875)',
}
```

</details>

<details>
<summary><code>textSize.base</code></summary>

```ts
{
  fontSize: '1rem',
  lineHeight: 'calc(1.5 / 1)',
}
```

</details>

<details>
<summary><code>textSize.lg</code></summary>

```ts
{
  fontSize: '1.125rem',
  lineHeight: 'calc(1.75 / 1.125)',
}
```

</details>

<details>
<summary><code>textSize.xl</code></summary>

```ts
{
  fontSize: '1.25rem',
  lineHeight: 'calc(1.75 / 1.25)',
}
```

</details>

<details>
<summary><code>textSize['2xl']</code></summary>

```ts
{
  fontSize: '1.5rem',
  lineHeight: 'calc(2 / 1.5)',
}
```

</details>

<details>
<summary><code>textSize['3xl']</code></summary>

```ts
{
  fontSize: '1.875rem',
  lineHeight: 'calc(2.25 / 1.875)',
}
```

</details>

<details>
<summary><code>textSize['4xl']</code></summary>

```ts
{
  fontSize: '2.25rem',
  lineHeight: 'calc(2.5 / 2.25)',
}
```

</details>

<details>
<summary><code>textSize['5xl']</code></summary>

```ts
{
  fontSize: '3rem',
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['6xl']</code></summary>

```ts
{
  fontSize: '3.75rem',
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['7xl']</code></summary>

```ts
{
  fontSize: '4.5rem',
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['8xl']</code></summary>

```ts
{
  fontSize: '6rem',
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['9xl']</code></summary>

```ts
{
  fontSize: '8rem',
  lineHeight: '1',
}
```

</details>

```tsx
import { textSize } from 'solarwindcss'

function Example() {
  return (
    <div
      {...apply(
        textSize.xl,
        //
      )}
    >
      Lorem Ipsum
    </div>
  )
}
```
