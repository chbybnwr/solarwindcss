# fontSize

```markdown
| Token            | Value    |
| ---------------- | -------- |
| fontSize['xs']   | 0.75rem  |
| fontSize['sm']   | 0.875rem |
| fontSize['base'] | 1rem     |
| fontSize['lg']   | 1.125rem |
| fontSize['xl']   | 1.25rem  |
| fontSize['2xl']  | 1.5rem   |
| fontSize['3xl']  | 1.875rem |
| fontSize['4xl']  | 2.25rem  |
| fontSize['5xl']  | 3rem     |
| fontSize['6xl']  | 3.75rem  |
| fontSize['7xl']  | 4.5rem   |
| fontSize['8xl']  | 6rem     |
| fontSize['9xl']  | 8rem     |
```

```tsx
import { fontSize } from 'solarwindcss/font-size.stylex'

function Example() {
  return (
    <div
      {...apply({
        color: fontSize['xl'],
      })}
    >
      lorem ipsum
    </div>
  )
}
```

## textSize

<details>
<summary><code>textSize['xs']</code></summary>

```ts
{
  fontSize: fontSize['xs'],
  lineHeight: 'calc(1 / 0.75)',
}
```

</details>

<details>
<summary><code>textSize['sm']</code></summary>

```ts
{
  fontSize: fontSize['sm'],
  lineHeight: 'calc(1.25 / 0.875)',
}
```

</details>

<details>
<summary><code>textSize['base']</code></summary>

```ts
{
  fontSize: fontSize['base'],
  lineHeight: 'calc(1.5 / 1)',
}
```

</details>

<details>
<summary><code>textSize['lg']</code></summary>

```ts
{
  fontSize: fontSize['lg'],
  lineHeight: 'calc(1.75 / 1.125)',
}
```

</details>

<details>
<summary><code>textSize['xl']</code></summary>

```ts
{
  fontSize: fontSize['xl'],
  lineHeight: 'calc(1.75 / 1.25)',
}
```

</details>

<details>
<summary><code>textSize['2xl']</code></summary>

```ts
{
  fontSize: fontSize['2xl'],
  lineHeight: 'calc(2 / 1.5)',
}
```

</details>

<details>
<summary><code>textSize['3xl']</code></summary>

```ts
{
  fontSize: fontSize['3xl'],
  lineHeight: 'calc(2.25 / 1.875)',
}
```

</details>

<details>
<summary><code>textSize['4xl']</code></summary>

```ts
{
  fontSize: fontSize['4xl'],
  lineHeight: 'calc(2.5 / 2.25)',
}
```

</details>

<details>
<summary><code>textSize['5xl']</code></summary>

```ts
{
  fontSize: fontSize['5xl'],
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['6xl']</code></summary>

```ts
{
  fontSize: fontSize['6xl'],
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['7xl']</code></summary>

```ts
{
  fontSize: fontSize['7xl'],
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['8xl']</code></summary>

```ts
{
  fontSize: fontSize['8xl'],
  lineHeight: '1',
}
```

</details>

<details>
<summary><code>textSize['9xl']</code></summary>

```ts
{
  fontSize: fontSize['9xl'],
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
        textSize['xl'],
        //
      )}
    >
      Lorem Ipsum
    </div>
  )
}
```
