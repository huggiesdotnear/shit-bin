# shit-bin

💩 constants for shit defi activity

---

develop and publish this package

```bash
bun install
bun update --latest @near-kit-tool-box/env @near-kit-tool-box/fun @near-kit-tool-box/web
bun run tsc --noEmit
# bun run index.ts
bun run build
bun publish --dry-run
bunx npm login
bun publish --access public

# prettier
bunx prettier . --write
bunx prettier . --check
```

---

## ENV

copy `.env.example` to `.env` and fill it in

```env
NEAR_KIT_NETWORK=testnet
# NEAR_KIT_NETWORK=mainnet

NEAR_KIT_ACCOUNT_ID=your-account.near
NEAR_KIT_PRIVATE_KEY=ed25519:your-private-key
```

`NEAR_KIT_NETWORK` must be exactly `mainnet` or `testnet`.

---

## HOW TO USE

add

```sh
npm i @huggies/shit-bin
bun add @huggies/shit-bin
```

---

This project was created using `bun init` in bun v1.2.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

copyright 2026 by sleet.near
