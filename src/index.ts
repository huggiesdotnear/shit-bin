// =====================================
// shit-bin
// =====================================
// mainnet
export { MAINNET_POOLS } from "./const/mainnet/POOLS";
export { MAINNET_TOKENS } from "./const/mainnet/TOKENS";
export { MAINNET_TOKEN_DECIMALS } from "./const/mainnet/TOKEN_DECIMALS";
export { KNOWN_HOLDERS_ACCOUNTS } from "./const/mainnet/HOLDERS";
// =====================================
// testnet
export {
  TESTNET_POOLS,
  TESTNET_TOKENS,
  TESTNET_TOKEN_DECIMALS,
} from "./const/testnet/testnet_shit_config";
// =====================================
// referral id
//
// Browser-safe. The server-only `referral_id_for_network_env` lives in
// `@huggies/shit-bin/server` — it must never be re-exported from here,
// or every browser consumer pulls in `dotenv` / `process.env`.
// =====================================
export {
  REFERRAL_ID_CONST,
  referral_id_for_network,
} from "./const/const_referral_id";
export { referral_id_for_network_web } from "./const/const_referral_id_web";
// =====================================
