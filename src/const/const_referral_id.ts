// =====================================
// referral id per network
//
// Pure data + pure resolver: no imports, no `process.env`, no `localStorage`.
// Safe to import from any environment (browser, node, edge).
// =====================================
export const REFERRAL_ID_CONST = {
  testnet: "ref.huggies.testnet",
  mainnet: "ref.huggies.near",
} as const;
// =====================================
// Returns the referral id for the given network.
// Any network that is not "testnet" resolves to mainnet.
export function referral_id_for_network(
  network: string | undefined | null,
): string {
  return network === "testnet"
    ? REFERRAL_ID_CONST.testnet
    : REFERRAL_ID_CONST.mainnet;
}
// =====================================
