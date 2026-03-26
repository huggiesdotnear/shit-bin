import {
  near_kit_env,
  ref_get_return_function,
  rhea_contractId_for_network_env,
} from "@sleet-js/near-kit-custom-client-setup-with-other-custom-functions";
import { MAINNET_POOLS, MAINNET_TOKENS } from "../../src/index";
// =====================================
// START AMOUNT
const WNEAR_START_AMOUNT = "1000000000000000000000000"; // 1 NEAR
console.log("START AMOUNT:", WNEAR_START_AMOUNT, "WNEAR");
// =====================================
console.log("==============================================");
// GET SHIT BUY QUOTE
const WNEAR_IN_SHIT_OUT_RESULT = await ref_get_return_function(
  near_kit_env,
  rhea_contractId_for_network_env,
  MAINNET_POOLS.SHIT_WNEAR_FEE_10,
  MAINNET_TOKENS.WNEAR,
  WNEAR_START_AMOUNT,
  MAINNET_TOKENS.SHIT
);
console.log("SHIT BUY QUOTE:", WNEAR_IN_SHIT_OUT_RESULT);
console.log("==============================================");
console.log("WNEAR - SHIT - ZEC :: ARB")
// GET SHIT BUY QUOTE
const WNEAR_IN_SHIT_OUT_ZERO_FEE_RESULT = await ref_get_return_function(
  near_kit_env,
  rhea_contractId_for_network_env,
  MAINNET_POOLS.SHIT_WNEAR_FEE_10,
  MAINNET_TOKENS.WNEAR,
  WNEAR_START_AMOUNT,
  MAINNET_TOKENS.SHIT
);
console.log("==============================================");
console.log("==============================================");
// =====================================
