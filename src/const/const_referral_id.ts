import { MY_ENV_NEAR_networkId } from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
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
