# Spacing

<!-- prettier-ignore-start -->

```markdown
| Token        | Value               | rem      |   ∼px |
| ------------ | ------------------- | -------- | ----: |
| spacing[0]   | calc(0.25rem * 0)   | 0rem     |   0px |
| spacing[0.5] | calc(0.25rem * 0.5) | 0.125rem |   2px |
| spacing[1]   | calc(0.25rem * 1)   | 0.25rem  |   4px |
| spacing[1.5] | calc(0.25rem * 1.5) | 0.375rem |   6px |
| spacing[2]   | calc(0.25rem * 2)   | 0.5rem   |   8px |
| spacing[2.5] | calc(0.25rem * 2.5) | 0.625rem |  10px |
| spacing[3]   | calc(0.25rem * 3)   | 0.75rem  |  12px |
| spacing[3.5] | calc(0.25rem * 3.5) | 0.875rem |  14px |
| spacing[4]   | calc(0.25rem * 4)   | 1rem     |  16px |
| spacing[5]   | calc(0.25rem * 5)   | 1.25rem  |  20px |
| spacing[6]   | calc(0.25rem * 6)   | 1.5rem   |  24px |
| spacing[7]   | calc(0.25rem * 7)   | 1.75rem  |  28px |
| spacing[8]   | calc(0.25rem * 8)   | 2rem     |  32px |
| spacing[9]   | calc(0.25rem * 9)   | 2.25rem  |  36px |
| spacing[10]  | calc(0.25rem * 10)  | 2.5rem   |  40px |
| spacing[11]  | calc(0.25rem * 11)  | 2.75rem  |  44px |
| spacing[12]  | calc(0.25rem * 12)  | 3rem     |  48px |
| spacing[14]  | calc(0.25rem * 14)  | 3.5rem   |  56px |
| spacing[16]  | calc(0.25rem * 16)  | 4rem     |  64px |
| spacing[20]  | calc(0.25rem * 20)  | 5rem     |  80px |
| spacing[24]  | calc(0.25rem * 24)  | 6rem     |  96px |
| spacing[28]  | calc(0.25rem * 28)  | 7rem     | 112px |
| spacing[32]  | calc(0.25rem * 32)  | 8rem     | 128px |
| spacing[36]  | calc(0.25rem * 36)  | 9rem     | 144px |
| spacing[40]  | calc(0.25rem * 40)  | 10rem    | 160px |
| spacing[44]  | calc(0.25rem * 44)  | 11rem    | 176px |
| spacing[48]  | calc(0.25rem * 48)  | 12rem    | 192px |
| spacing[52]  | calc(0.25rem * 52)  | 13rem    | 208px |
| spacing[56]  | calc(0.25rem * 56)  | 14rem    | 224px |
| spacing[60]  | calc(0.25rem * 60)  | 15rem    | 240px |
| spacing[64]  | calc(0.25rem * 64)  | 16rem    | 256px |
| spacing[72]  | calc(0.25rem * 72)  | 18rem    | 288px |
| spacing[80]  | calc(0.25rem * 80)  | 20rem    | 320px |
| spacing[96]  | calc(0.25rem * 96)  | 24rem    | 384px |
```

<!-- prettier-ignore-end -->

```tsx
import { spacing } from 'solarwindcss/spacing.stylex'

function Example() {
  return (
    <div
      {...apply({
        padding: spacing[4],
        margin: spacing[4],
      })}
    >
      lorem ipsum
    </div>
  )
}
```
