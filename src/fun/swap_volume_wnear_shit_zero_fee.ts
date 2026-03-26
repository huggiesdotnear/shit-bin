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
  amount_in: string,
  referral_id: string,
) {
  const result = await ref_swap_function(
    near_kit_env,
    rhea_contractId,
    [
      {
        pool_id: MAINNET_POOLS.SHIT_WNEAR_FEE_0,
        token_in: MAINNET_TOKENS.WNEAR,
        amount_in: amount_in,
        token_out: MAINNET_TOKENS.SHIT,
        min_amount_out: "0",
      },
      {
        pool_id: MAINNET_POOLS.SHIT_WNEAR_FEE_0,
        token_in: MAINNET_TOKENS.SHIT,
        token_out: MAINNET_TOKENS.WNEAR,
        min_amount_out: amount_in,
      },
    ],
    referral_id,
  );
  return result as FinalExecutionOutcome;
}
// =====================================
