import {
  MY_ENV_NEAR_networkId,
} from "@near-kit-tool-box/env";
import { getStoredNetworkId } from "@near-kit-tool-box/web";
// =====================================
const referral_id_testnet = "ref.huggies.testnet";
const referral_id_mainnet = "ref.huggies.near";
// =====================================
// env
export const referral_id_for_network_env =
  MY_ENV_NEAR_networkId === "testnet"
    ? referral_id_testnet
    : referral_id_mainnet;
// ===========================================
// web
export function referral_id_for_network_web() {
  const networkId = getStoredNetworkId();
  const referral_id =
    networkId === "testnet" ? referral_id_testnet : referral_id_mainnet;
  console.log("referral id ", referral_id);
  return referral_id;
}
// ===========================================
