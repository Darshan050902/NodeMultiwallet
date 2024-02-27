const express = require("express");
const axios = require("axios");
const BASE_URL = "https://api-sandbox.hyperface.co/walletserv";
const router = express.Router();
router.post("/walletFetch", async (req, res) => {
  try {
    const response = await axios.post(BASE_URL + "/wallets/fetch", req.body, {
      headers: {
        "x-tenant-id": "ZAGGLE",
      },
    });
    if (response.status === 200) {
      return res.status(200).json({
        message: "Wallets fetched successfully",
        data: response.data,
      });
    }
    return res.status(401).json({
      message: "Error fetching wallets",
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
});
module.exports = router;