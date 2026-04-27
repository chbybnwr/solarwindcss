# boxShadow

```markdown
| Token                 | Value                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| boxShadow['2xs']      | 0 1px var(--sw-box-shadow-color, rgb(0 0 0 / 0.05))                                                                         |
| boxShadow.xs          | 0 1px 2px 0 var(--sw-box-shadow-color, rgb(0 0 0 / 0.05))                                                                   |
| boxShadow.sm          | 0 1px 3px 0 var(--sw-box-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1))       |
| boxShadow.md          | 0 4px 6px -1px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1))    |
| boxShadow.lg          | 0 10px 15px -3px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1))  |
| boxShadow.xl          | 0 20px 25px -5px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--sw-box-shadow-color, rgb(0 0 0 / 0.1)) |
| boxShadow['2xl']      | 0 25px 50px -12px var(--sw-box-shadow-color, rgb(0 0 0 / 0.25))                                                             |
| insetBoxShadow['2xs'] | inset 0 1px var(--sw-inset-shadow-color, rgb(0 0 0 / 0.05))                                                                 |
| insetBoxShadow.xs     | inset 0 1px 1px var(--sw-inset-shadow-color, rgb(0 0 0 / 0.05))                                                             |
| insetBoxShadow.sm     | inset 0 2px 4px var(--sw-inset-shadow-color, rgb(0 0 0 / 0.05))                                                             |
```

```tsx
import { boxShadow } from 'solarwindcss/box-shadow.stylex'
import { theme } from 'solarwindcss/theme.stylex'

function Example() {
  return (
    <div
      {...apply({
        boxShadow: boxShadow.xl,
        // custom color with theme
        [theme['--sw-box-shadow-color']]: color.blue500,
      })}
    >
      lorem ipsum
    </div>
  )
}
```
