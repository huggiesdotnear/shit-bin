import {
  near_kit_env,
  wrap_contractId_for_network_env,
  rhea_contractId_for_network_env,
} from "@near-kit-tool-box/env";
import {
  wrap_near_deposit_fun,
  ft_transfer_call_fun,
} from "@near-kit-tool-box/fun";
import type { AmountInput } from "@near-kit-tool-box/fun";
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
