import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import {
  volume_swap_wnear_shit_zero_fee_fun,
  referral_id_for_network_env,
} from "../../src/index";
// =====================================
// required wnear in rhea contract
const amount_in = "2000000000000000000000000";
// =====================================
console.log(
  await volume_swap_wnear_shit_zero_fee_fun(
    near_kit_env,
    rhea_contractId_for_network_env,
    amount_in,
    referral_id_for_network_env,
  ),
);
// =====================================
