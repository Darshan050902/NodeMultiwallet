const express = require('express')
const transactionRouter = require('./transactionRouter')

const router = express.Router()

router.use('/accounts/wallets/transactions', transactionRouter);

module.exports = router;