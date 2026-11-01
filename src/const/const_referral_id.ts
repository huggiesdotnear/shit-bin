import { NEAR_KIT_NETWORK } from "@near-kit-tool-box/env";
import { get_stored_network_id } from "@near-kit-tool-box/web";
// =====================================
const referral_id_testnet = "ref.huggies.testnet";
const referral_id_mainnet = "ref.huggies.near";
// =====================================
// env
export const referral_id_for_network_env =
  NEAR_KIT_NETWORK === "testnet" ? referral_id_testnet : referral_id_mainnet;
// ===========================================
// web
export function referral_id_for_network_web() {
  const networkId = get_stored_network_id();
  const referral_id =
    networkId === "testnet" ? referral_id_testnet : referral_id_mainnet;
  console.log("referral id ", referral_id);
  return referral_id;
}
// ===========================================
