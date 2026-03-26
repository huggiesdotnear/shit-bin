import {
  near_kit_env,
  rhea_contractId_for_network_env,
  ref_storage_deposit_function,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import type { AmountInput } from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
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
