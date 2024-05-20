const express = require('express')
const cors = require('cors')
const rulesEngine = require('./rulesEngine')
const lenders = require('./lenders')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/submit', async (req, res) => {

  const applicationData = req.body;
  const approvedLenders = rulesEngine.run(applicationData, lenders);
  const lenderApprovals = await Promise.all(
    approvedLenders.map(lender => sendToBank(lender))
  );

  res.status(200).json({
    message: 'Applications sent to eligible lenders',
    data: lenderApprovals
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

/**
 * Simulates an API call to bank
 * @param {object} lender
 * @return {Promise<>}
 */
function sendToBank(lender) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Applied to ${lender.name}`)
      resolve({
        name: lender.name,
        response: `Successfully applied to ${lender.name}`
      })
    }, 1000)
  });
}
