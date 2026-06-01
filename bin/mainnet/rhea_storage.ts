import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "@near-kit-tool-box/env";
import {
  ref_storage_deposit_function,
} from "@near-kit-tool-box/fun";
import type { AmountInput } from "@near-kit-tool-box/fun";
// =====================================
// this amount should be enough for basic actions?
const STORAGE_DEPOSIT_AMOUNT: AmountInput = "0.01 NEAR";
// =====================================
console.log(
  await ref_storage_deposit_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    STORAGE_DEPOSIT_AMOUNT,
  ),
);
