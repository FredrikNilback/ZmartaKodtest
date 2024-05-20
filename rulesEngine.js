/**
 * @param {object} applicationData
 * @param {Array} lenders - An array with lenders and their rules
 * @return {Array} - The filtered array
 */
function run(applicationData, lenders) {
  const allowedLenders = [];

  lenders.forEach(lender => {

    let allowed = true;
    for (const rule of lender.rules) {
      
      switch (rule.operator) {
        case "greaterThan":
          if ((applicationData[rule.field] <= rule.value)) {
            allowed = false;
          }
          break;
        case "lessThan":
          if ((applicationData[rule.field] >= rule.value)) {
            allowed = false;
          }
          break;
        default:
          allowed = false;
          break;
      }
      if (!allowed) {
        break;
      }
    }
    if (allowed) {
      allowedLenders.push(lender);
    }
  });

  return allowedLenders;
}

module.exports = {
  run
}
