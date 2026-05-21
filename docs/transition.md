# transition

<details>
<summary><code>transition.base</code></summary>

```ts
{
  transitionProperty: 'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events',
  transitionTimingFunction: transitionTimingFunction.easeInOut,
  transitionDuration: '150ms',
}
```

</details>

<details>
<summary><code>transition.all</code></summary>

```ts
{
  transitionProperty: 'all',
  transitionTimingFunction: transitionTimingFunction.easeInOut,
  transitionDuration: '150ms',
}
```

</details>

<details>
<summary><code>transition.colors</code></summary>

```ts
{
  transitionProperty: 'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',
  transitionTimingFunction: transitionTimingFunction.easeInOut,
  transitionDuration: '150ms',
}
```

</details>

<details>
<summary><code>transition.opacity</code></summary>

```ts
{
  transitionProperty: 'opacity',
  transitionTimingFunction: transitionTimingFunction.easeInOut,
  transitionDuration: '150ms',
}
```

</details>

<details>
<summary><code>transition.shadow</code></summary>

```ts
{
  transitionProperty: 'box-shadow',
  transitionTimingFunction: transitionTimingFunction.easeInOut,
  transitionDuration: '150ms',
}
```

</details>

<details>
<summary><code>transition.transform</code></summary>

```ts
{
  transitionProperty: 'transform, translate, scale, rotate',
  transitionTimingFunction: transitionTimingFunction.easeInOut,
  transitionDuration: '150ms',
}
```

</details>

```jsx
import { transition } from 'solarwindcss'
import { color } from 'solarwindcss/color.stylex'

function Example() {
  return (
    <div
      {...apply(
        transition.color,
        {
          color: {
            default: color.blue500,
            ':hover': color.red500,
          },
        },
        //
      )}
    >
      lorem ipsum
    </div>
  )
}
```

## Variables

```markdown
| Token                              | Value                        |
| ---------------------------------- | ---------------------------- |
| transitionTimingFunction.easeIn    | cubic-bezier(0.4, 0, 1, 1)   |
| transitionTimingFunction.easeOut   | cubic-bezier(0, 0, 0.2, 1)   |
| transitionTimingFunction.easeInOut | cubic-bezier(0.4, 0, 0.2, 1) |
```
