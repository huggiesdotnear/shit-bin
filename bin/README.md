# shit-bin

this is the place where all the fun happens!

run

```sh
bun run bin/index.ts
cp .env.example .env
source .env

# bin/utility
bun run bin/utility/sort-pools.ts

# bin/mainnet
bun run bin/mainnet/shit_get_return.ts

# flow
bun run bin/mainnet/rhea_storage.ts
bun run bin/mainnet/rhea_wrap_and_deposit.ts
```

---

complete flow

1. wrap NEAR
2. rhea storage deposit
3. deposit/transfer to rhea
4. swap, make sure you have the right assests for a swap
5. withdraw
6. un wrap

some of this can be done form a ui
like intear wallet
or huggies.near

---

copyright 2026 by sleet.near
