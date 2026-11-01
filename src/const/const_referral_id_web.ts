// =====================================
// browser referral id
//
// `localStorage` is read inside the function body, never at module scope,
// so importing this module is safe during SSR and in any non-browser env.
// =====================================
import { referral_id_for_network } from "./const_referral_id";
// =====================================
const NETWORK_STORAGE_KEY = "network_id";
// =====================================
// Reads the network from `localStorage` and resolves the referral id.
// Defaults to mainnet when there is no stored value or no storage access.
export function referral_id_for_network_web(): string {
  const networkId = read_stored_network_id();
  return referral_id_for_network(networkId);
}
// =====================================
// Returns the raw stored network id, or null when storage is unavailable.
function read_stored_network_id(): string | null {
  try {
    if (typeof localStorage === "undefined") return null;
    return localStorage.getItem(NETWORK_STORAGE_KEY);
  } catch {
    return null;
  }
}
// =====================================
