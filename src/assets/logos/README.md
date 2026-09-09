# Partner logos

Drop official lender logo files here, then wire each one up in
`src/data/lendingPartners.ts`:

```ts
import iciciLogo from '../assets/logos/icici-bank.svg';

// ...inside the matching partner entry:
logo: iciciLogo,
```

Guidance:

- **SVG preferred**, or PNG with a transparent background.
- Roughly square, or it will be letterboxed inside the 56x56 tile.
- Logos render on a white tile so dark-on-white marks stay legible in both themes.
- Any partner without a `logo` shows its two-letter monogram instead. If a logo
  file is missing or fails to load, the card falls back to the monogram
  automatically rather than showing a broken image.

Only use marks you are licensed to display. See the note in the section footer.
