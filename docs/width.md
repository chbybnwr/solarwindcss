# width

```markdown
| Token        | Value |    ~px |
| ------------ | ----- | -----: |
| width['3xs'] | 16rem |  256px |
| width['2xs'] | 18rem |  288px |
| width['xs']  | 20rem |  320px |
| width['sm']  | 24rem |  384px |
| width['md']  | 28rem |  448px |
| width['lg']  | 32rem |  512px |
| width['xl']  | 36rem |  576px |
| width['2xl'] | 42rem |  672px |
| width['3xl'] | 48rem |  768px |
| width['4xl'] | 56rem |  896px |
| width['5xl'] | 64rem | 1024px |
| width['6xl'] | 72rem | 1152px |
| width['7xl'] | 80rem | 1280px |
```

```tsx
import { width } from 'solarwindcss/width.stylex'

function Example() {
  return (
    <div
      {...apply({
        width: width['xl'],
      })}
    >
      lorem ipsum
    </div>
  )
}
```
