# Responsive Design

## @media

```markdown
| Token          | Value                   |    ~px |
| -------------- | ----------------------- | -----: |
| atMedia.sm     | @media (width >= 40rem) |  640px |
| atMedia.md     | @media (width >= 48rem) |  768px |
| atMedia.lg     | @media (width >= 64rem) | 1024px |
| atMedia.xl     | @media (width >= 80rem) | 1280px |
| atMedia['2xl'] | @media (width >= 96rem) | 1536px |
```

```tsx
import { atMedia } from 'solarwindcss/at-media.stylex'

function Example() {
  return (
    <div
      {...apply({
        color: {
          default: 'blue',
          [atMedia.md]: 'green',
        },
      })}
    >
      lorem ipsum
    </div>
  )
}
```

## @container

```markdown
| Token              | Value                       |    ~px |
| ------------------ | --------------------------- | -----: |
| atContainer['3xs'] | @container (width >= 16rem) |  256px |
| atContainer['2xs'] | @container (width >= 18rem) |  288px |
| atContainer.xs     | @container (width >= 20rem) |  320px |
| atContainer.sm     | @container (width >= 24rem) |  384px |
| atContainer.md     | @container (width >= 28rem) |  448px |
| atContainer.lg     | @container (width >= 32rem) |  512px |
| atContainer.xl     | @container (width >= 36rem) |  576px |
| atContainer['2xl'] | @container (width >= 42rem) |  672px |
| atContainer['3xl'] | @container (width >= 48rem) |  768px |
| atContainer['4xl'] | @container (width >= 56rem) |  896px |
| atContainer['5xl'] | @container (width >= 64rem) | 1024px |
| atContainer['6xl'] | @container (width >= 72rem) | 1152px |
| atContainer['7xl'] | @container (width >= 80rem) | 1280px |
```

```tsx
import { atContainer } from 'solarwindcss/at-container.stylex'

function Example() {
  return (
    <div
      {...apply({
        color: {
          default: 'blue',
          [atContainer.md]: 'green',
        },
      })}
    >
      lorem ipsum
    </div>
  )
}
```
