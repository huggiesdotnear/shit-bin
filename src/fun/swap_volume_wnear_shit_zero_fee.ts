import {
  near_kit_env,
  ref_swap_function,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import { MAINNET_POOLS } from "../mainnet/POOLS";
import { MAINNET_TOKENS } from "../mainnet/TOKENS";
import type { FinalExecutionOutcome } from "near-kit";
// =====================================
// the goal of this function is to start and end with wrap near
// required wnear in rhea contract
// =====================================
export async function volume_swap_fun_wnear_shit_zero_fee(
  rhea_contractId: string,
  referral_id: string,
) {
  const result = await ref_swap_function(
    near_kit_env,
    rhea_contractId,
    [{"pool_id"}{}],
    referral_id,
  );
  return result as FinalExecutionOutcome;
}
// =====================================
