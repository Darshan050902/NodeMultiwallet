const express = require("express");
const transactionRouter = require("./transactionRouter");

const router = express.Router();

router.use("/accounts/wallets/transactions", transactionRouter);
router.use("/wallets/", walletRouter);

module.exports = router;
