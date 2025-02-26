const express = require("express");
const app = express();

// Use the environment variable for the port, default to 3000
const PORT = process.env.PORT || 3000;

// Endpoint to serve advertise data
app.get("/advertise", (req, res) => {
  res.json([
    {
      imageUrl: "https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png",
      link: "https://shopee.co.th/"
    },
    {
      imageUrl: "https://www.most2414.com/wp-content/uploads/2020/02/02FEB-Insights-Lazada-Service-Marketplace-MOST2414-Cover.jpg",
      link: "https://www.lazada.co.th/"
    },
    {
      imageUrl: "https://play-lh.googleusercontent.com/zqNEWiGA_SogqqQHNW0R2w3s5BcvHxc80GjZ_qbMIY3elmKw6WMUzAzmbjwQFUzq__s=w240-h480-rw",
      link: "https://www.kaidee.com/"
    }
  ]);
});


app.listen(PORT, () => {
    console.log(`Microservice online`);
});