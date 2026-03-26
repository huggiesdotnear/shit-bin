import {
  near_kit_env,
  wrap_contractId_for_network_env,
  rhea_contractId_for_network_env,
  wrap_near_deposit_fun,
  ft_transfer_call_fun
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import type { AmountInput } from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
// =====================================
const amount_near: AmountInput = "2 NEAR";
const ft_contractId = wrap_contractId_for_network_env;
const receiver_id = rhea_contractId_for_network_env;
const msg = "";
const amount = "2000000000000000000000000"; // 2 NEAR
// =====================================
console.log("==============================================");
console.log(
  await wrap_near_deposit_fun(near_kit_env, ft_contractId, amount_near),
);
console.log("==============================================");
// =====================================
console.log("==============================================");
console.log(
  await ft_transfer_call_fun(
    near_kit_env,
    ft_contractId,
    receiver_id,
    msg,
    amount,
  ),
);
console.log("==============================================");
// =====================================
