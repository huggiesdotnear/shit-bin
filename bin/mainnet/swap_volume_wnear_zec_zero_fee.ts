import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import {
  volume_swap_wnear_zec_zero_fee_fun,
  referral_id_for_network_env,
} from "../../src/index";
// =====================================
// required wnear in rhea contract
const amount_in = "1500000000000000000000000";
// const min_amount_out = "0"
// =====================================
console.log(
  await volume_swap_wnear_zec_zero_fee_fun(
    near_kit_env,
    rhea_contractId_for_network_env,
    amount_in,
    amount_in,
    referral_id_for_network_env,
  ),
);
// =====================================
