# fontFamily

<details>
<summary><code>font.sans / sans</code></summary>

```ts
{
  fontFamily: fontFamily.sans,
  fontFeatureSettings: fontFeatureSettings.sans,
}
```

</details>

<details>
<summary><code>font.serif / serif</code></summary>

```ts
{
  fontFamily: fontFamily.serif,
}
```

</details>

<details>
<summary><code>font.mono / mono</code></summary>

```ts
{
  fontFamily: fontFamily.mono,
  fontFeatureSettings: fontFeatureSettings.mono,
}
```

</details>

```tsx
import { font } from 'solarwindcss'

function Example() {
  return (
    <div
      {...apply(
        font.mono,
        //
      )}
    >
      console.log('hello, world')
    </div>
  )
}
```

## Variables

```markdown
| Token            | Value                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| fontFamily.sans  | ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| fontFamily.serif | ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif                                                        |
| fontFamily.mono  | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace                 |
```

```markdown
| Token                    | Value   |
| ------------------------ | ------- |
| fontFeatureSettings.sans | initial |
| fontFeatureSettings.mono | initial |
```

```tsx
import { font } from 'solarwindcss'
import { fontFamily } from 'solarwindcss/font-family.stylex'
import { fontFeatureSettings } from 'solarwindcss/font-feature-settings.stylex'

function Example() {
  return (
    <div
      {...apply({
        [fontFamily.sans]: `"Inter", sans-serif`,
        [fontFeatureSettings.sans]: 'normal',
      })}
    >
      <div
        {...apply(
          font.sans,
          //
        )}
      >
        hello, world'
      </div>
    </div>
  )
}
```
