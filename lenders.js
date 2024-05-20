module.exports = [
  {
    name: 'Nordbank',
    rules: [
      {
        field: 'amount',
        operator: 'greaterThan',
        value: 10000
      },
      {
        field: 'amount',
        operator: 'lessThan',
        value: 6000000,
      }
    ]
  },
  {
    name: 'Sydnet Bank',
    rules: [
      {
        field: 'amount',
        operator: 'greaterThan',
        value: 100000
      }
    ]
  },
  {
    name: 'Svenske Bank',
    rules: [
      {
        field: 'repaymentYears',
        operator: 'lessThan',
        value: 8
      },
      {
        field: 'amount',
        operator: 'lessThan',
        value: 25000
      }
    ]
  }
]
