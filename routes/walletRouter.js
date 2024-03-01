const express = require("express");
const axios = require("axios");
const BASE_URL = "https://api-uat.hyperface.co/walletserv";
<<<<<<< HEAD
=======

>>>>>>> 53d13f3 (updated)
const router = express.Router();

router.post("/walletFetch", async (req, res) => {
  try {
    const response = await axios.post(BASE_URL + "/wallets/fetch", req.body, {
      headers: {
        apikey: "secret_arbt87483egudd2i",
        "x-tenant-id": "ZAGGLE",
        apikey: "secret_5q2pjf7xjfwldlpv",
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
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/pauseWallet", async (req, res) => {
  console.log(req.body);
  try {
    const response = await axios.post(BASE_URL + "/wallets/update", req.body, {
      headers: {
        apikey: "secret_arbt87483egudd2i",
        "x-tenant-id": "ZAGGLE",
      },
    });
    if (response.status === 200) {
      console.log(response.data);
      return res.status(200).json({
        message: "Wallet paused successfully",
        data: response.data,
      });
    }
    return res.status(401).json({
      message: "Error pausing wallet",
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
});
module.exports = router;
