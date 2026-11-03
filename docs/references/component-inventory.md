# Altezza component inventory

Source: reusable UI families consumed by `artifacts/mensa-inbox/src/`.
Ranking is based on unique consumer-file counts in the current application.
Unused scaffold files are excluded because they do not form part of the shipped
Altezza experience.

| Family | Build contract | Dependencies | Evidence | Chunk | Status |
| --- | --- | --- | --- | --- | --- |
| Button | `components/button.md` | Radix Slot, CVA | 6 consumers | 1 | implemented |
| Separator | `components/separator.md` | Radix Separator | 4 consumers | 1 | implemented |
| Input | `components/input.md` | React | 2 consumers | 1 | implemented |
| Label | `components/label.md` | Radix Label, CVA | 2 consumers | 1 | implemented |
| Tooltip | `components/tooltip.md` | Radix Tooltip | 2 consumers | 1 | implemented |
| Toast | `components/toast.md` | Radix Toast, local toast hook | 4 consumers across Toast/Toaster | 2 | implemented |
| Card | `components/card.md` | React | 1 consumer | 2 | implemented |
| Dialog | `components/dialog.md` | Radix Dialog | 1 consumer | 2 | implemented |
| Sheet | `components/sheet.md` | Radix Dialog | 1 consumer | 2 | implemented |
| Textarea | `components/textarea.md` | React | 1 consumer | 3 | implemented |
| Skeleton | `components/skeleton.md` | React | 1 consumer | 3 | implemented |
| Toggle | `components/toggle.md` | Radix Toggle, CVA | 1 consumer | 3 | implemented |

All three chunks are implemented. The five-family pilot was approved before the
remaining catalog was completed.