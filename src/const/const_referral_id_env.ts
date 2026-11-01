// =====================================
// server referral id
//
// SERVER ONLY. This module reads `process.env` at module scope via
// `@near-kit-tool-box/env`, which pulls in `dotenv` (needs `fs`, `path`,
// `os`) and `process.env`. It is NOT exported from the browser-safe barrel
// in `src/index.ts` — import it from `@huggies/shit-bin/server` instead.
// =====================================
import { NEAR_KIT_NETWORK } from "@near-kit-tool-box/env";
import { referral_id_for_network } from "./const_referral_id";
// =====================================
export const referral_id_for_network_env: string =
  referral_id_for_network(NEAR_KIT_NETWORK);
// =====================================
