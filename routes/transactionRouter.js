const express = require("express");
const axios = require("axios");
const BASE_URL = "https://api-uat.hyperface.co/walletserv";

const router = express.Router();

router.post("/fetch", async (req, res) => {
  try {
    const response = await axios.post(
      BASE_URL + "/accounts/wallets/transactions/fetch",
      req.body,
      {
        headers: {
          apikey: "secret_5q2pjf7xjfwldlpv",
          "x-tenant-id": "ZAGGLE",
        },
      }
    );
    if (response.status === 200) {
      return res.status(200).json({
        message: "Ledgers fetched successfully",
        data: response.data,
      });
    }
    return res.status(401).json({
      message: "Error fetching ledgers",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
