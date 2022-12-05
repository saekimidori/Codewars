// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  // takes four strings representing coupon codes valid/invalid and date/exp date
  // return boolean if code is valid and coupon is not exp'd
  
  // enteredCode === correctCode && exp date >= current date
  enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)