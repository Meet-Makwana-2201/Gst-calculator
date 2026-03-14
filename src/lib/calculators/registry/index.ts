import { amazonSellerProfitCalculator } from "./amazon-seller-profit";
import { compoundInterestCalculator } from "./compound-interest";
import { discountCalculator } from "./discount";
import { emiCalculator } from "./emi";
import { emiPreclosureCalculator } from "./emi-preclosure";
import { gstCalculator } from "./gst";
import { loanCalculator } from "./loan";
import { lumpsumCalculator } from "./lumpsum";
import { marginCalculator } from "./margin";
import { percentageCalculator } from "./percentage";
import { profitLossCalculator } from "./profit-loss";
import { removeGstCalculator } from "./remove-gst";
import { simpleInterestCalculator } from "./simple-interest";
import { sipCalculator } from "./sip";

import type { CalculatorRegistry } from "../types";

export {
  amazonSellerProfitCalculator,
  compoundInterestCalculator,
  discountCalculator,
  emiCalculator,
  emiPreclosureCalculator,
  gstCalculator,
  loanCalculator,
  lumpsumCalculator,
  marginCalculator,
  percentageCalculator,
  profitLossCalculator,
  removeGstCalculator,
  simpleInterestCalculator,
  sipCalculator,
};

export const calculatorRegistry: CalculatorRegistry = {
  [gstCalculator.slug]: gstCalculator,
  [removeGstCalculator.slug]: removeGstCalculator,
  [emiCalculator.slug]: emiCalculator,
  [discountCalculator.slug]: discountCalculator,
  [percentageCalculator.slug]: percentageCalculator,
  [simpleInterestCalculator.slug]: simpleInterestCalculator,
  [compoundInterestCalculator.slug]: compoundInterestCalculator,
  [profitLossCalculator.slug]: profitLossCalculator,
  [marginCalculator.slug]: marginCalculator,
  [loanCalculator.slug]: loanCalculator,
  [sipCalculator.slug]: sipCalculator,
  [lumpsumCalculator.slug]: lumpsumCalculator,
  [emiPreclosureCalculator.slug]: emiPreclosureCalculator,
  [amazonSellerProfitCalculator.slug]: amazonSellerProfitCalculator,
};
