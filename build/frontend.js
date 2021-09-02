/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/financial/dist/financial.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/financial/dist/financial.esm.js ***!
  \******************************************************/
/*! exports provided: PaymentDueTime, fv, ipmt, irr, mirr, nper, npv, pmt, ppmt, pv, rate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDueTime", function() { return PaymentDueTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fv", function() { return fv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipmt", function() { return ipmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irr", function() { return irr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirr", function() { return mirr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nper", function() { return nper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "npv", function() { return npv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pmt", function() { return pmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ppmt", function() { return ppmt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pv", function() { return pv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rate", function() { return rate; });
/**
 * When payments are due
 *
 * @since v0.0.12
 */
var PaymentDueTime;

(function (PaymentDueTime) {
  /** Payments due at the beginning of a period (1) */
  PaymentDueTime["Begin"] = "begin";
  /** Payments are due at the end of a period (0) */

  PaymentDueTime["End"] = "end"; // 0
})(PaymentDueTime || (PaymentDueTime = {}));
/**
 * Compute the future value.
 *
 * @param rate - Rate of interest as decimal (not per cent) per period
 * @param nper - Number of compounding periods
 * @param pmt - A fixed payment, paid either at the beginning or ar the end (specified by `when`)
 * @param pv - Present value
 * @param when - When payment was made
 *
 * @returns The value at the end of the `nper` periods
 *
 * @since v0.0.12
 *
 * ## Examples
 *
 * What is the future value after 10 years of saving $100 now, with
 * an additional monthly savings of $100. Assume the interest rate is
 * 5% (annually) compounded monthly?
 *
 * ```javascript
 * import { fv } from 'financial'
 *
 * fv(0.05 / 12, 10 * 12, -100, -100) // 15692.928894335748
 * ```
 *
 * By convention, the negative sign represents cash flow out (i.e. money not
 * available today).  Thus, saving $100 a month at 5% annual interest leads
 * to $15,692.93 available to spend in 10 years.
 *
 * ## Notes
 *
 * The future value is computed by solving the equation:
 *
 * ```
 * fv + pv * (1+rate) ** nper + pmt * (1 + rate * when) / rate * ((1 + rate) ** nper - 1) == 0
 * ```
 *
 * or, when `rate == 0`:
 *
 * ```
 * fv + pv + pmt * nper == 0
 * ```
 *
 * ## References
 *
 * [Wheeler, D. A., E. Rathke, and R. Weir (Eds.) (2009, May)](http://www.oasis-open.org/committees/documents.php?wg_abbrev=office-formulaOpenDocument-formula-20090508.odt).
 */


function fv(rate, nper, pmt, pv, when) {
  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  var isRateZero = rate === 0;

  if (isRateZero) {
    return -(pv + pmt * nper);
  }

  var temp = Math.pow(1 + rate, nper);
  var whenMult = when === PaymentDueTime.Begin ? 1 : 0;
  return -pv * temp - pmt * (1 + rate * whenMult) / rate * (temp - 1);
}
/**
 * Compute the payment against loan principal plus interest.
 *
 * @param rate - Rate of interest (per period)
 * @param nper - Number of compounding periods (e.g., number of payments)
 * @param pv - Present value (e.g., an amount borrowed)
 * @param fv - Future value (e.g., 0)
 * @param when - When payments are due
 *
 * @returns the (fixed) periodic payment
 *
 * @since v0.0.12
 *
 * ## Examples
 *
 * What is the monthly payment needed to pay off a $200,000 loan in 15
 * years at an annual interest rate of 7.5%?
 *
 * ```javascript
 * import { pmt } from 'financial'
 *
 * pmt(0.075/12, 12*15, 200000) // -1854.0247200054619
 * ```
 *
 * In order to pay-off (i.e., have a future-value of 0) the $200,000 obtained
 * today, a monthly payment of $1,854.02 would be required.  Note that this
 * example illustrates usage of `fv` having a default value of 0.
 *
 * ## Notes
 *
 * The payment is computed by solving the equation:
 *
 * ```
 * fv + pv * (1 + rate) ** nper + pmt * (1 + rate*when) / rate * ((1 + rate) ** nper - 1) == 0
 * ```
 *
 * or, when `rate == 0`:
 *
 * ```
 * fv + pv + pmt * nper == 0
 * ```
 *
 * for `pmt`.
 *
 * Note that computing a monthly mortgage payment is only
 * one use for this function.  For example, `pmt` returns the
 * periodic deposit one must make to achieve a specified
 * future balance given an initial deposit, a fixed,
 * periodically compounded interest rate, and the total
 * number of periods.
 *
 * ## References
 *
 * [Wheeler, D. A., E. Rathke, and R. Weir (Eds.) (2009, May)](http://www.oasis-open.org/committees/documents.php?wg_abbrev=office-formulaOpenDocument-formula-20090508.odt).
 */

function pmt(rate, nper, pv, fv, when) {
  if (fv === void 0) {
    fv = 0;
  }

  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  var isRateZero = rate === 0;
  var temp = Math.pow(1 + rate, nper);
  var whenMult = when === PaymentDueTime.Begin ? 1 : 0;
  var maskedRate = isRateZero ? 1 : rate;
  var fact = isRateZero ? nper : (1 + maskedRate * whenMult) * (temp - 1) / maskedRate;
  return -(fv + pv * temp) / fact;
}
/**
 * Compute the number of periodic payments.
 *
 * @param rate - Rate of interest (per period)
 * @param pmt - Payment
 * @param pv - Present value
 * @param fv - Future value
 * @param when - When payments are due
 *
 * @returns The number of periodic payments
 *
 * @since v0.0.12
 *
 * ## Examples
 *
 * If you only had $150/month to pay towards the loan, how long would it take
 * to pay-off a loan of $8,000 at 7% annual interest?
 *
 * ```javascript
 * import { nper } from 'financial'
 *
 * Math.round(nper(0.07/12, -150, 8000), 5) // 64.07335
 * ```
 *
 * So, over 64 months would be required to pay off the loan.
 *
 * ## Notes
 *
 * The number of periods `nper` is computed by solving the equation:
 *
 * ```
 * fv + pv * (1+rate) ** nper + pmt * (1+rate * when) / rate * ((1+rate) ** nper-1) = 0
 * ```
 *
 * but if `rate = 0` then:
 *
 * ```
 * fv + pv + pmt * nper = 0
 * ```
 */

function nper(rate, pmt, pv, fv, when) {
  if (fv === void 0) {
    fv = 0;
  }

  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  var isRateZero = rate === 0;

  if (isRateZero) {
    return -(fv + pv) / pmt;
  }

  var whenMult = when === PaymentDueTime.Begin ? 1 : 0;
  var z = pmt * (1 + rate * whenMult) / rate;
  return Math.log((-fv + z) / (pv + z)) / Math.log(1 + rate);
}
/**
 * Compute the interest portion of a payment.
 *
 * @param rate - Rate of interest as decimal (not per cent) per period
 * @param per - Interest paid against the loan changes during the life or the loan. The `per` is the payment period to calculate the interest amount
 * @param nper - Number of compounding periods
 * @param pv - Present value
 * @param fv - Future value
 * @param when - When payments are due
 *
 * @returns Interest portion of payment
 *
 * @since v0.0.12
 *
 * ## Examples
 *
 * What is the amortization schedule for a 1 year loan of $2500 at
 * 8.24% interest per year compounded monthly?
 *
 * ```javascript
 * const principal = 2500
 * const periods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 * const ipmts = periods.map((per) => f.ipmt(0.0824 / 12, per, 1 * 12, principal))
 * expect(ipmts).toEqual([
 *   -17.166666666666668,
 *   -15.789337457350777,
 *   -14.402550587464257,
 *   -13.006241114404524,
 *   -11.600343649629737,
 *   -10.18479235559687,
 *   -8.759520942678298,
 *   -7.324462666057678,
 *   -5.879550322604295,
 *   -4.424716247725826,
 *   -2.9598923121998877,
 *   -1.4850099189833388
 * ])
 * const interestpd = ipmts.reduce((a, b) => a + b, 0)
 * expect(interestpd).toBeCloseTo(-112.98308424136215, 6)
 * ```
 *
 * The `periods` variable represents the periods of the loan.  Remember that financial equations start the period count at 1!
 *
 * ## Notes
 *
 * The total payment is made up of payment against principal plus interest.
 *
 * ```
 * pmt = ppmt + ipmt
 * ```
 */

function ipmt(rate, per, nper, pv, fv, when) {
  if (fv === void 0) {
    fv = 0;
  }

  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  // Payments start at the first period, so payments before that
  // don't make any sense.
  if (per < 1) {
    return Number.NaN;
  } // If payments occur at the beginning of a period and this is the
  // first period, then no interest has accrued.


  if (when === PaymentDueTime.Begin && per === 1) {
    return 0;
  }

  var totalPmt = pmt(rate, nper, pv, fv, when);
  var ipmtVal = _rbl(rate, per, totalPmt, pv, when) * rate; // If paying at the beginning we need to discount by one period

  if (when === PaymentDueTime.Begin && per > 1) {
    ipmtVal = ipmtVal / (1 + rate);
  }

  return ipmtVal;
}
/**
 * Compute the payment against loan principal.
 *
 * @param rate - Rate of interest (per period)
 * @param per - Amount paid against the loan changes.  The `per` is the period of interest.
 * @param nper - Number of compounding periods
 * @param pv - Present value
 * @param fv - Future value
 * @param when - When payments are due
 *
 * @returns the payment against loan principal
 *
 * @since v0.0.14
 */

function ppmt(rate, per, nper, pv, fv, when) {
  if (fv === void 0) {
    fv = 0;
  }

  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  var total = pmt(rate, nper, pv, fv, when);
  return total - ipmt(rate, per, nper, pv, fv, when);
}
/**
 * Calculates the present value of an annuity investment based on constant-amount
 * periodic payments and a constant interest rate.
 *
 * @param rate - Rate of interest (per period)
 * @param nper - Number of compounding periods
 * @param pmt - Payment
 * @param fv - Future value
 * @param when - When payments are due
 *
 * @returns the present value of a payment or investment
 *
 * @since v0.0.15
 *
 * ## Examples
 *
 * What is the present value (e.g., the initial investment)
 * of an investment that needs to total $15692.93
 * after 10 years of saving $100 every month?  Assume the
 * interest rate is 5% (annually) compounded monthly.
 *
 * ```javascript
 * import { pv } from 'financial'
 *
 * pv(0.05/12, 10*12, -100, 15692.93) // -100.00067131625819
 * ```
 *
 * By convention, the negative sign represents cash flow out
 * (i.e., money not available today).  Thus, to end up with
 * $15,692.93 in 10 years saving $100 a month at 5% annual
 * interest, one's initial deposit should also be $100.
 *
 * ## Notes
 *
 * The present value is computed by solving the equation:
 *
 * ```
 * fv + pv * (1 + rate) ** nper + pmt * (1 + rate * when) / rate * ((1 + rate) ** nper - 1) = 0
 * ```
 *
 * or, when `rate = 0`:
 *
 * ```
 * fv + pv + pmt * nper = 0
 * ```
 *
 * for `pv`, which is then returned.
 *
 * ## References
 *
 * [Wheeler, D. A., E. Rathke, and R. Weir (Eds.) (2009, May)](http://www.oasis-open.org/committees/documents.php?wg_abbrev=office-formulaOpenDocument-formula-20090508.odt).
 */

function pv(rate, nper, pmt, fv, when) {
  if (fv === void 0) {
    fv = 0;
  }

  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  var whenMult = when === PaymentDueTime.Begin ? 1 : 0;
  var isRateZero = rate === 0;
  var temp = Math.pow(1 + rate, nper);
  var fact = isRateZero ? nper : (1 + rate * whenMult) * (temp - 1) / rate;
  return -(fv + pmt * fact) / temp;
}
/**
 * Compute the rate of interest per period
 *
 * @param nper - Number of compounding periods
 * @param pmt - Payment
 * @param pv - Present value
 * @param fv - Future value
 * @param when - When payments are due ('begin' or 'end')
 * @param guess - Starting guess for solving the rate of interest
 * @param tol - Required tolerance for the solution
 * @param maxIter - Maximum iterations in finding the solution
 *
 * @returns the rate of interest per period (or `NaN` if it could
 *  not be computed within the number of iterations provided)
 *
 * @since v0.0.16
 *
 * ## Notes
 *
 * Use Newton's iteration until the change is less than 1e-6
 * for all values or a maximum of 100 iterations is reached.
 * Newton's rule is:
 *
 * ```
 * r_{n+1} = r_{n} - g(r_n)/g'(r_n)
 * ```
 *
 * where:
 *
 * - `g(r)` is the formula
 * - `g'(r)` is the derivative with respect to r.
 *
 *
 * The rate of interest is computed by iteratively solving the
 * (non-linear) equation:
 *
 * ```
 * fv + pv * (1+rate) ** nper + pmt * (1+rate * when) / rate * ((1+rate) ** nper - 1) = 0
 * ```
 *
 * for `rate.
 *
 * ## References
 *
 * [Wheeler, D. A., E. Rathke, and R. Weir (Eds.) (2009, May)](http://www.oasis-open.org/committees/documents.php?wg_abbrev=office-formulaOpenDocument-formula-20090508.odt).
 */

function rate(nper, pmt, pv, fv, when, guess, tol, maxIter) {
  if (when === void 0) {
    when = PaymentDueTime.End;
  }

  if (guess === void 0) {
    guess = 0.1;
  }

  if (tol === void 0) {
    tol = 1e-6;
  }

  if (maxIter === void 0) {
    maxIter = 100;
  }

  var rn = guess;
  var iterator = 0;
  var close = false;

  while (iterator < maxIter && !close) {
    var rnp1 = rn - _gDivGp(rn, nper, pmt, pv, fv, when);

    var diff = Math.abs(rnp1 - rn);
    close = diff < tol;
    iterator++;
    rn = rnp1;
  } // if exausted all the iterations and the result is not
  // close enough, returns `NaN`


  if (!close) {
    return Number.NaN;
  }

  return rn;
}
/**
 * Return the Internal Rate of Return (IRR).
 *
 * This is the "average" periodically compounded rate of return
 * that gives a net present value of 0.0; for a more complete
 * explanation, see Notes below.
 *
 * @param values - Input cash flows per time period.
 *   By convention, net "deposits"
 *   are negative and net "withdrawals" are positive.  Thus, for
 *   example, at least the first element of `values`, which represents
 *   the initial investment, will typically be negative.
 * @param guess - Starting guess for solving the Internal Rate of Return
 * @param tol - Required tolerance for the solution
 * @param maxIter - Maximum iterations in finding the solution
 *
 * @returns Internal Rate of Return for periodic input values
 *
 * @since v0.0.17
 *
 * ## Notes
 *
 * The IRR is perhaps best understood through an example (illustrated
 * using `irr` in the Examples section below).
 *
 * Suppose one invests 100
 * units and then makes the following withdrawals at regular (fixed)
 * intervals: 39, 59, 55, 20.  Assuming the ending value is 0, one's 100
 * unit investment yields 173 units; however, due to the combination of
 * compounding and the periodic withdrawals, the "average" rate of return
 * is neither simply 0.73/4 nor (1.73)^0.25-1.
 * Rather, it is the solution (for `r`) of the equation:
 *
 * ```
 * -100 + 39/(1+r) + 59/((1+r)^2) + 55/((1+r)^3) + 20/((1+r)^4) = 0
 * ```
 *
 * In general, for `values` = `[0, 1, ... M]`,
 * `irr` is the solution of the equation:
 *
 * ```
 * \\sum_{t=0}^M{\\frac{v_t}{(1+irr)^{t}}} = 0
 * ```
 *
 * ## Example
 *
 * ```javascript
 * import { irr } from 'financial'
 *
 * irr([-100, 39, 59, 55, 20]) // 0.28095
 * irr([-100, 0, 0, 74]) // -0.0955
 * irr([-100, 100, 0, -7]) // -0.0833
 * irr([-100, 100, 0, 7]) // 0.06206
 * irr([-5, 10.5, 1, -8, 1]) // 0.0886
 * ```
 *
 * ## References
 *
 * - L. J. Gitman, "Principles of Managerial Finance, Brief," 3rd ed.,
 *  Addison-Wesley, 2003, pg. 348.
 */

function irr(values, guess, tol, maxIter) {
  if (guess === void 0) {
    guess = 0.1;
  }

  if (tol === void 0) {
    tol = 1e-6;
  }

  if (maxIter === void 0) {
    maxIter = 100;
  }

  // Based on https://gist.github.com/ghalimi/4591338 by @ghalimi
  // ASF licensed (check the link for the full license)
  // Credits: algorithm inspired by Apache OpenOffice
  // Initialize dates and check that values contains at
  // least one positive value and one negative value
  var dates = [];
  var positive = false;
  var negative = false;

  for (var i = 0; i < values.length; i++) {
    dates[i] = i === 0 ? 0 : dates[i - 1] + 365;

    if (values[i] > 0) {
      positive = true;
    }

    if (values[i] < 0) {
      negative = true;
    }
  } // Return error if values does not contain at least one positive
  // value and one negative value


  if (!positive || !negative) {
    return Number.NaN;
  } // Initialize guess and resultRate


  var resultRate = guess; // Implement Newton's method

  var newRate, epsRate, resultValue;
  var iteration = 0;
  var contLoop = true;

  do {
    resultValue = _irrResult(values, dates, resultRate);
    newRate = resultRate - resultValue / _irrResultDeriv(values, dates, resultRate);
    epsRate = Math.abs(newRate - resultRate);
    resultRate = newRate;
    contLoop = epsRate > tol && Math.abs(resultValue) > tol;
  } while (contLoop && ++iteration < maxIter);

  if (contLoop) {
    return Number.NaN;
  } // Return internal rate of return


  return resultRate;
}
/**
 * Returns the NPV (Net Present Value) of a cash flow series.
 *
 * @param rate - The discount rate
 * @param values - The values of the time series of cash flows.  The (fixed) time
 * interval between cash flow "events" must be the same as that for
 * which `rate` is given (i.e., if `rate` is per year, then precisely
 * a year is understood to elapse between each cash flow event).  By
 * convention, investments or "deposits" are negative, income or
 * "withdrawals" are positive; `values` must begin with the initial
 * investment, thus `values[0]` will typically be negative.
 * @returns The NPV of the input cash flow series `values` at the discount `rate`.
 *
 * @since v0.0.18
 *
 * ## Warnings
 *
 * `npv considers a series of cashflows starting in the present (t = 0).
 * NPV can also be defined with a series of future cashflows, paid at the
 * end, rather than the start, of each period. If future cashflows are used,
 * the first cashflow `values[0]` must be zeroed and added to the net
 * present value of the future cashflows. This is demonstrated in the
 * examples.
 *
 * ## Notes
 *
 * Returns the result of:
 *
 * ```
 * \\sum_{t=0}^{M-1}{\\frac{values_t}{(1+rate)^{t}}}
 * ```
 *
 * ## Examples
 *
 * Consider a potential project with an initial investment of $40 000 and
 * projected cashflows of $5 000, $8 000, $12 000 and $30 000 at the end of
 * each period discounted at a rate of 8% per period. To find the project's
 * net present value:
 *
 * ```javascript
 * import {npv} from 'financial'
 *
 * const rate = 0.08
 * const cashflows = [-40_000, 5000, 8000, 12000, 30000]
 * npv(rate, cashflows) // 3065.2226681795255
 * ```
 *
 * It may be preferable to split the projected cashflow into an initial
 * investment and expected future cashflows. In this case, the value of
 * the initial cashflow is zero and the initial investment is later added
 * to the future cashflows net present value:
 *
 * ```javascript
 * const initialCashflow = cashflows[0]
 * cashflows[0] = 0
 *
 * npv(rate, cashflows) + initialCashflow // 3065.2226681795255
 * ```
 *
 * ## References
 *
 * L. J. Gitman, "Principles of Managerial Finance, Brief,"
 * 3rd ed., Addison-Wesley, 2003, pg. 346.
 */

function npv(rate, values) {
  return values.reduce(function (acc, curr, i) {
    return acc + curr / Math.pow(1 + rate, i);
  }, 0);
}
/**
 * Calculates the Modified Internal Rate of Return.
 *
 * @param values - Cash flows (must contain at least one positive and one negative
 *   value) or nan is returned.  The first value is considered a sunk
 *   cost at time zero.
 * @param financeRate - Interest rate paid on the cash flows
 * @param reinvestRate - Interest rate received on the cash flows upon reinvestment
 *
 * @returns Modified internal rate of return
 *
 * @since v0.1.0
 */

function mirr(values, financeRate, reinvestRate) {
  var positive = false;
  var negative = false;

  for (var i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      positive = true;
    }

    if (values[i] < 0) {
      negative = true;
    }
  } // Return error if values does not contain at least one
  // positive value and one negative value


  if (!positive || !negative) {
    return Number.NaN;
  }

  var numer = Math.abs(npv(reinvestRate, values.map(function (x) {
    return x > 0 ? x : 0;
  })));
  var denom = Math.abs(npv(financeRate, values.map(function (x) {
    return x < 0 ? x : 0;
  })));
  return Math.pow(numer / denom, 1 / (values.length - 1)) * (1 + reinvestRate) - 1;
}
/**
 * This function is here to simply have a different name for the 'fv'
 * function to not interfere with the 'fv' keyword argument within the 'ipmt'
 * function.  It is the 'remaining balance on loan' which might be useful as
 * it's own function, but is easily calculated with the 'fv' function.
 *
 * @private
 */

function _rbl(rate, per, pmt, pv, when) {
  return fv(rate, per - 1, pmt, pv, when);
}
/**
 * Evaluates `g(r_n)/g'(r_n)`, where:
 *
 * ```
 * g = fv + pv * (1+rate) ** nper + pmt * (1+rate * when)/rate * ((1+rate) ** nper - 1)
 * ```
 *
 * @private
 */


function _gDivGp(r, n, p, x, y, when) {
  var w = when === PaymentDueTime.Begin ? 1 : 0;
  var t1 = Math.pow(r + 1, n);
  var t2 = Math.pow(r + 1, n - 1);
  var g = y + t1 * x + p * (t1 - 1) * (r * w + 1) / r;
  var gp = n * t2 * x - p * (t1 - 1) * (r * w + 1) / Math.pow(r, 2) + n * p * t2 * (r * w + 1) / r + p * (t1 - 1) * w / r;
  return g / gp;
}
/**
 * Calculates the resulting amount.
 *
 * Based on https://gist.github.com/ghalimi/4591338 by @ghalimi
 * ASF licensed (check the link for the full license)
 *
 * @private
 */


function _irrResult(values, dates, rate) {
  var r = rate + 1;
  var result = values[0];

  for (var i = 1; i < values.length; i++) {
    result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
  }

  return result;
}
/**
 * Calculates the first derivation
 *
 * Based on https://gist.github.com/ghalimi/4591338 by @ghalimi
 * ASF licensed (check the link for the full license)
 *
 * @private
 */


function _irrResultDeriv(values, dates, rate) {
  var r = rate + 1;
  var result = 0;

  for (var i = 1; i < values.length; i++) {
    var frac = (dates[i] - dates[0]) / 365;
    result -= frac * values[i] / Math.pow(r, frac + 1);
  }

  return result;
}


//# sourceMappingURL=financial.esm.js.map


/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var financial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! financial */ "./node_modules/financial/dist/financial.esm.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var userLang = navigator.language || navigator.userLanguage;
var resultDiv = document.createElement('div');
var summaryDiv = document.createElement('div');
var tableDiv = document.createElement('div');
var __ = wp.i18n.__;

var Calculator = /*#__PURE__*/function () {
  function Calculator(formEl) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Calculator);

    this.amount = parseFloat(formEl.querySelector('[name="amount"]').value);
    this.rate = parseFloat(formEl.querySelector('[name="rate"]').value / 100);
    this.term = parseFloat(formEl.querySelector('[name="term"]').value);
    this.frequency = parseFloat(formEl.querySelector('[name="frequency"]').value);
    this.currency = '<small>' + formEl.dataset.currency + '</small>';
    this.showSummary = formEl.dataset.yearsummary === 'true';
    this.showTable = formEl.dataset.showtable === 'true';
    this.result = this.payment() * -1;
    this.totalInterestPaid = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Calculator, [{
    key: "payment",
    value: function payment() {
      var result = Object(financial__WEBPACK_IMPORTED_MODULE_2__["pmt"])(this.rate / this.frequency, this.frequency * this.term, this.amount);
      return result;
    }
  }, {
    key: "summary",
    value: function summary() {
      //begin building the return string for the display of the amort table
      var summary = '<p>' + __('Loan amount', 'mortgage') + ": <b>" + this.formatNumber(this.amount) + '</b><br />' + __('Interest rate', 'mortgage') + ': <b>' + this.rate.toFixed(2) * 100 + '%</b><br />' + __('Number of payments', 'mortgage') + ': <b>' + this.term * this.frequency + '</b><br />' + __('Recurring payment', 'mortgage') + ': <b>' + this.formatNumber(this.result) + '</b><br />' + __('Total paid', 'mortgage') + ': <b>' + this.formatNumber(this.result * this.term * this.frequency) + '</b></p>';
      return summary;
    }
  }, {
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var th = document.createElement("th");
          var text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "mortgageTable",
    value: function mortgageTable() {
      var _this = this;

      //add header row for table to return string
      var resultTable = "<table><tr><th>#</th><th>" + __('Payment', 'mortgage') + "</th>" + "<th>" + __('Interest', 'mortgage') + "</th><th>" + __('Principal', 'mortgage') + "</th><th>" + __('Balance', 'mortgage') + "</th>";
      var heads = ['#', __('Payment', 'mortgage'), __('Interest', 'mortgage'), __('Principal', 'mortgage'), __('Balance', 'mortgage')]; // convert total payments to progressive array

      var periods = Array.from(Array(this.term * this.frequency).keys());
      periods.shift();
      periods.push(periods.slice(-1).pop() + 1);
      var ipmts = periods.map(function (per) {
        return Object(financial__WEBPACK_IMPORTED_MODULE_2__["ipmt"])(_this.rate / _this.frequency, per, 1 * periods.length, _this.amount) * -1;
      });
      var balance = this.amount;
      /**
       * Loop that calculates the monthly Loan amortization amounts then adds 
       * them to the return string 
       */

      for (var i = 0; i < ipmts.length; i++) {
        balance = balance - this.result + ipmts[i]; //start a new table row on each loop iteration

        resultTable += "<tr align=center>"; //display the month number in col 1 using the loop count variable

        resultTable += "<td>" + (i + 1) + "</td>";
        resultTable += "<td>" + this.formatNumber(this.result) + "</td>";
        resultTable += "<td>" + this.formatNumber(ipmts[i]) + "</td>";
        resultTable += "<td>" + this.formatNumber(this.result - ipmts[i]) + "</td>"; //code for displaying in loop balance

        resultTable += "<td>" + this.formatNumber(balance) + "</td>"; //end the table row on each iteration of the loop 

        resultTable += "</tr>";
        this.totalInterestPaid += ipmts[i];

        if (0 === (i + 1) % this.frequency && this.showSummary) {
          // show year summary
          resultTable += this.yearSummary(i + 1);
        }
      } //Final piece added to return string before returning it - closes the table


      resultTable += "</table>";
      return resultTable;
    }
  }, {
    key: "yearSummary",
    value: function yearSummary(per) {
      var year = Number(per / 12);
      var result = '<tr>';
      result += '<td colspan="5">';
      result += __('Total after year ', 'mortgage') + year + ': ' + this.formatNumber(this.result * this.frequency * year);
      result += '<br>' + __('Interests paid after year ', 'mortgage') + year + ': ' + this.formatNumber(this.totalInterestPaid);
      result += '</td>';
      result += '</tr>';
      return result;
    }
  }, {
    key: "response",
    value: function response(elm) {
      var parent = elm.parentNode;

      if ('wp-block-columns' === parent.parentNode.className) {
        elm = elm.parentNode.parentNode;
      }

      resultDiv.className = 'wp-block-mortgage-result success';
      resultDiv.innerHTML = '<p>' + __('Recurring payment', 'mortgage') + ': <b>' + this.formatNumber(this.result) + '</b></p>';
      summaryDiv.className = 'wp-block-mortgage-summary';
      summaryDiv.innerHTML = this.summary();

      if (this.showTable) {
        tableDiv.className = 'wp-block-mortgage-table';
        tableDiv.innerHTML = this.mortgageTable();
        elm.after(tableDiv);
      }

      elm.after(summaryDiv);
      elm.after(resultDiv);
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(val) {
      return this.currency + val.toLocaleString(userLang, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }]);

  return Calculator;
}();



/***/ }),

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.js */ "./src/calculator.js");

document.addEventListener('submit', handleSubmitEvents, true); // useCapture=false to ensure we bubble upwards (and thus can cancel propagation)

function handleSubmitEvents(e) {
  var formEl = e.target;

  if (formEl.className.indexOf('wp-block-mortgage-form') < 0) {
    return;
  } // always prevent default (because regular submit doesn't work for Formello)


  e.preventDefault();
  e.stopPropagation();

  if (formEl.reportValidity()) {
    var calculator = new _calculator_js__WEBPACK_IMPORTED_MODULE_0__["default"](formEl);
    calculator.response(formEl);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map