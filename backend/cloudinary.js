const cloudinaryModule = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
const cloudy = cloudinaryModule.v2;

cloudy.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  folder: "traveler",
});
module.exports = cloudy;
