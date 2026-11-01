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

### browser

the default entry point is browser-safe: it has no `process.env`, no `dotenv`
and no node built-ins, so it bundles cleanly.

```ts
import {
  MAINNET_TOKENS,
  TESTNET_TOKENS,
  REFERRAL_ID_CONST,
  referral_id_for_network,
  referral_id_for_network_web,
} from "@huggies/shit-bin";

// resolve from a network string you already have
referral_id_for_network("testnet"); // "ref.huggies.testnet"
referral_id_for_network("mainnet"); // "ref.huggies.near"

// or resolve from the network stored in localStorage
referral_id_for_network_web(); // "ref.huggies.near" by default
```

### server

`referral_id_for_network_env` reads `NEAR_KIT_NETWORK` from the environment
and is **server only** — importing it pulls in `dotenv` and `process.env`.
Use the `/server` entry point for it.

```ts
import { referral_id_for_network_env } from "@huggies/shit-bin/server";
```

never import `@huggies/shit-bin/server` from browser code.

---

This project was created using `bun init` in bun v1.2.12. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

copyright 2026 by sleet.near
