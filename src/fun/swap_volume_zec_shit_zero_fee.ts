import { ref_swap_function } from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import { MAINNET_POOLS } from "../mainnet/POOLS";
import { MAINNET_TOKENS } from "../mainnet/TOKENS";
import type { FinalExecutionOutcome } from "near-kit";
import { Near } from "near-kit";
// =====================================
// the goal of this function is to start and end with zec
// required zec in rhea contract
// =====================================
export async function volume_swap_zec_shit_zero_fee_fun(
  near: Near,
  rhea_contractId: string,
  amount_in: string,
  min_amount_out: string,
  referral_id: string,
) {
  const result = await ref_swap_function(
    near,
    rhea_contractId,
    [
      {
        pool_id: MAINNET_POOLS.SHIT_ZEC_FEE_0,
        token_in: MAINNET_TOKENS.ZEC,
        amount_in: amount_in,
        token_out: MAINNET_TOKENS.SHIT,
        min_amount_out: "0",
      },
      {
        pool_id: MAINNET_POOLS.SHIT_ZEC_FEE_0,
        token_in: MAINNET_TOKENS.SHIT,
        token_out: MAINNET_TOKENS.ZEC,
        min_amount_out: min_amount_out,
      },
    ],
    referral_id,
  );
  return result as FinalExecutionOutcome;
}
// =====================================
