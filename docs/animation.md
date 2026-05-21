# animation

<details>
<summary><code>animate.spin / spin</code></summary>

```ts
{
  animationName: animationName.spin,
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
}
```

</details>

<details>
<summary><code>animate.ping / ping</code></summary>

```ts
{
  animationName: animationName.ping,
  animationDuration: '1s',
  animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  animationIterationCount: 'infinite',
}
```

</details>

<details>
<summary><code>animate.pulse / pulse</code></summary>

```ts
{
  animationName: animationName.pulse,
  animationDuration: '2s',
  animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
  animationIterationCount: 'infinite',
}
```

</details>

<details>
<summary><code>animate.bounce / bounce</code></summary>

```ts
{
  animationName: animationName.bounce,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
}
```

</details>

```jsx
import { animate } from 'solarwindcss'

function Example() {
  return (
    <div
      {...apply(
        animate.bounce,
        //
      )}
    >
      extra
    </div>
  )
}
```

## keyframes

<details>
<summary><code>animationName.spin</code></summary>

```ts
keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})
```

</details>

<details>
<summary><code>animationName.ping</code></summary>

```ts
keyframes({
  '75%': {},
  '100%': {
    transform: 'scale(2)',
    opacity: 0,
  },
})
```

</details>

<details>
<summary><code>animationName.pulse</code></summary>

```ts
keyframes({
  '50%': {
    opacity: 0.5,
  },
})
```

</details>

<details>
<summary><code>animationName.bounce</code></summary>

```ts
keyframes({
  '0%': {},
  '100%': {
    transform: 'translateY(-25%)',
    animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
  },
  '50%': {
    transform: 'none',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  },
})
```

</details>
