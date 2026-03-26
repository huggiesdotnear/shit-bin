import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import {
  volume_swap_zec_shit_zero_fee_fun,
  referral_id_for_network_env,
} from "../../src/index";
// =====================================
// required zec in rhea contract
const amount_in = "810100";
const min_amount_out = "810095";
// =====================================
console.log(
  await volume_swap_zec_shit_zero_fee_fun(
    near_kit_env,
    rhea_contractId_for_network_env,
    amount_in,
    min_amount_out,
    referral_id_for_network_env,
  ),
);
// =====================================
